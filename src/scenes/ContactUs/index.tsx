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

const ContactUs = () => {
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
          {contactItems.map((item, index) => (
            <div key={item.title} className={s.card_wrap}>
              <div className={s.card}>
                <Button variant="contained">{item.btnTxt}</Button>
                <Divider />
                <div className={s.info}>
                  {item.Icon}
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">{item.email}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form>
          <Stack direction="row" gap={2}>
            <Stack sx={{ width: '100%' }}>
              <FormLabel>Full Name</FormLabel>
              <TextField placeholder="your name" variant="outlined" fullWidth />
            </Stack>

            <Stack sx={{ width: '100%' }}>
              <FormLabel>Your Email</FormLabel>
              <TextField
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
                placeholder="your company name here"
                variant="outlined"
                fullWidth
              />
            </Stack>

            <Stack sx={{ width: '100%' }}>
              <FormLabel>Subject</FormLabel>
              <TextField
                placeholder="how can we help"
                variant="outlined"
                fullWidth
              />
            </Stack>
          </Stack>

          <Stack sx={{ width: '100%' }}>
            <FormLabel>Message</FormLabel>
            <TextField
              multiline
              rows={4}
              placeholder="hello there, I whold like to talk about how to...."
              variant="outlined"
              fullWidth
            />
          </Stack>

          <Button variant="contained" size="large">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
