import React from 'react';
import s from './contactus.module.scss';
import HandIcon from './hand_icon.svg';
import Image from 'next/image';
import {
  Button,
  Divider,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { EmailOutlined, PhoneOutlined } from '@mui/icons-material';
import Link from 'next/link';

const contactItems = [
  {
    btnTxt: 'Contact',
    title: 'Email',
    email: 'henzzo400@gmail.com',
    Icon: <EmailOutlined />,
  },
  {
    btnTxt: 'Call',
    title: 'Phone',
    email: '+251 23365539',
    Icon: <PhoneOutlined />,
  },
];

type Props = {
  contactData: {
    socials: [{ name: string; link: string }];
    phone: string;
    email: string;
  };
};
const ContactUs = ({ contactData }: Props) => {
  console.log('props  ------- ;', contactData);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <div className={s.icon}>
            <Image src={HandIcon} alt="hand icon" />
          </div>

          <Typography className={s.sub} variant="body2">
            Contact Us
          </Typography>

          <Typography variant="h4">
            Let&apos;s talk about your Business
          </Typography>
        </header>

        <div className={s.cards}>
          <div className={s.card_wrap}>
            <Link
              href={`mailto:${contactData?.email || 'giulianofcb@gmail.com'}`}
              style={{ width: '100%' }}
            >
              <div className={s.card}>
                <Button variant="contained"> Contact </Button>
                <Divider />
                <div className={s.info}>
                  <EmailOutlined />
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="body1">
                    {contactData?.email || 'giulianofcb@gmail.com'}
                  </Typography>
                </div>
              </div>
            </Link>
          </div>

          <div className={s.card_wrap}>
            <Link
              href={`tel:${contactData?.phone || '+251 912 611 477'}`}
              style={{ width: '100%' }}
            >
              <div className={s.card}>
                <Button variant="contained">Call</Button>
                <Divider />
                <div className={s.info}>
                  <PhoneOutlined />
                  <Typography variant="h6">Phone</Typography>
                  <Typography variant="body1">
                    {contactData?.phone || '+251 912 611 477'}
                  </Typography>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <form
          action="https://formsubmit.co/fasrafadvisory@gmail.com"
          method="POST"
        >
          <Stack direction="row" gap={2}>
            <Stack sx={{ width: '100%' }}>
              <FormLabel>Full Name</FormLabel>
              <TextField
                required
                name="fullName"
                placeholder="your name"
                variant="outlined"
                fullWidth
              />
            </Stack>

            <Stack sx={{ width: '100%' }}>
              <FormLabel>Your Email</FormLabel>
              <TextField
                required
                type="email"
                name="email"
                placeholder="example@youmail.com"
                variant="outlined"
                fullWidth
              />
            </Stack>
          </Stack>

          <Stack direction="row" gap={2}>
            <Stack sx={{ width: '100%' }}>
              <FormLabel>Company</FormLabel>
              <TextField
                name="company"
                type="text"
                placeholder="your company name here"
                variant="outlined"
                fullWidth
              />
            </Stack>

            <Stack sx={{ width: '100%' }}>
              <FormLabel>Subject</FormLabel>
              <TextField
                required
                name="subject"
                type="text"
                placeholder="how can we help"
                variant="outlined"
                fullWidth
              />
            </Stack>
          </Stack>

          <Stack sx={{ width: '100%' }}>
            <FormLabel>Message</FormLabel>
            <TextField
              required
              multiline
              name="message"
              type="text"
              rows={4}
              placeholder="hello there, I whold like to talk about how to...."
              variant="outlined"
              fullWidth
            />
          </Stack>

          <Button variant="contained" size="large" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
