import { createFileRoute, Link } from '@tanstack/react-router';
import type React from 'react';
import { useState } from 'react';
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for Telegram
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}\n\n`;

    // Telegram username
    const telegramUsername = 'SouliyaPPS'; // Change this to the target Telegram username

    // Create the Telegram message URL (this opens a chat with @SouliyaPPS)
    const telegramLink = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

    // Redirect to Telegram
    window.location.href = telegramLink;
  };

  return (
    <section className='py-20 pt-32'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-2'>Get In Touch</h2>
          <div className='w-20 h-1 bg-primary mx-auto mb-6'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Feel free to contact me for any work or suggestions
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <a
            href='https://www.google.com/maps/search/?api=1&query=Pakhaow+Village,+Xaythany+District,+Vientiane+Capital,+Laos'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Card className='cursor-pointer hover:shadow-lg transition-shadow'>
              <CardContent className='p-6 flex flex-col items-center text-center'>
                <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
                  <MapPinIcon className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-lg font-bold mb-2'>Location</h3>
                <p className='text-muted-foreground'>
                  Pakhaow Village, Xaythany District, Vientiane Capital, Laos
                </p>
              </CardContent>
            </Card>
          </a>

          <Card
            className='cursor-pointer hover:shadow-lg transition-shadow'
            onClick={() => {
              window.location.href = 'mailto:souliyapps@gmail.com';
            }}
          >
            <CardContent className='p-6 flex flex-col items-center text-center'>
              <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
                <EnvelopeIcon className='h-6 w-6 text-primary' />
              </div>
              <h3 className='text-lg font-bold mb-2'>Email</h3>
              <p className='text-muted-foreground'>souliyapps@gmail.com</p>
            </CardContent>
          </Card>

          <Card
            className='cursor-pointer hover:shadow-lg transition-shadow'
            onClick={() => {
              window.location.href = 'https://wa.me/8562078287509';
            }}
          >
            <CardContent className='p-6 flex flex-col items-center text-center'>
              <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
                <PhoneIcon className='h-6 w-6 text-primary' />
              </div>
              <h3 className='text-lg font-bold mb-2'>Phone</h3>
              <p className='text-muted-foreground'>
                (+856) 20-78287509, 91182391
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='mt-12 max-w-3xl mx-auto'>
          <Card>
            <CardContent className='p-8'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-6 mb-6'>
                  <div>
                    <Input
                      type='text'
                      name='name'
                      placeholder='Your Name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full'
                    />
                  </div>
                  <div>
                    <Input
                      type='email'
                      name='email'
                      placeholder='Your Email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full'
                    />
                  </div>
                </div>
                <div className='mb-6'>
                  <Input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full'
                  />
                </div>
                <div className='mb-6'>
                  <Textarea
                    name='message'
                    placeholder='Your Message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='w-full min-h-[150px]'
                  />
                </div>
                <Button type='submit' className='w-full md:w-auto'>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
