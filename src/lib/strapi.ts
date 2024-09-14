export function getStrapiURL(path = '') {
  const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
  return `${url}${path}`;
}

export function getStrapiMedia(media: any) {
  const { url } = media.data.attributes;

  console.log('url start with: ', url);

  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}

// export const _Fasraf = axios.create({
//   baseURL: `${getStrapiURL('/api')}`,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${process.env.API_TOKEN}`,
//   },
// });

function buildQuery(params: Record<string, any>): string {
  const query = [];

  for (const key in params) {
    const value = params[key];

    if (Array.isArray(value)) {
      // For arrays, append each value with square brackets
      value.forEach((v) => {
        query.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(v)}`);
      });
    } else if (typeof value === 'object' && value !== null) {
      // For nested objects, recursively build the query string
      for (const subKey in value) {
        const subValue = value[subKey];
        query.push(
          `${encodeURIComponent(key)}[${encodeURIComponent(
            subKey,
          )}]=${encodeURIComponent(subValue)}`,
        );
      }
    } else if (value !== undefined && value !== null) {
      // For primitive values
      query.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  }

  return query.length ? `?${query.join('&')}` : '';
}

export class Fasraf {
  static async get<T = any>(
    url: string,
    options: RequestInit & { params?: Record<string, any> },
  ) {
    const queryString = options.params ? buildQuery(options.params) : '';
    const fullUrl = `${getStrapiURL(`/api${url}`)}${queryString}`;

    const res = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },

      // Include other options if necessary
      // For example, `cache` options for ISR
      next: options.next, // For ISR options
      ...options,
    });

    if (!res.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return (await res.json()) as Promise<T>;
  }
}
