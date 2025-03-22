import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  CheckIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { createFileRoute } from '@tanstack/react-router';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { SendIcon } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { AnimatedBackground } from '~/components/ui/animated-background';
import { AnimatedTitle } from '~/components/ui/animated-title';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay for animation purposes
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Format the message for Telegram
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}\n\n`;

    // Telegram username
    const telegramUsername = 'SouliyaPPS'; // Change this to the target Telegram username

    // Create the Telegram message URL (this opens a chat with @SouliyaPPS)
    const telegramLink = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset success state after 2 seconds
    setTimeout(() => {
      // Redirect to Telegram
      window.location.href = telegramLink;
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const iconContainerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: 'var(--primary)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -45 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      rotate: 15,
      color: 'white',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
    focus: {
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
    submitting: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'loop',
      },
    },
    success: {
      backgroundColor: 'var(--success)',
      transition: {
        duration: 0.3,
      },
    },
  };

  // 3D tilt effect for cards
  const ContactCard = ({
    icon,
    title,
    content,
    onClick,
  }: {
    icon: React.ReactNode;
    title: string;
    content: string;
    onClick?: () => void;
  }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct * 5);
      y.set(yPct * 5);
      rotateX.set(-yPct * 10);
      rotateY.set(xPct * 10);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      rotateX.set(0);
      rotateY.set(0);
    };

    const transform = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    return (
      <motion.div
        variants={cardVariants}
        whileHover='hover'
        style={{
          transform,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className='cursor-pointer'
      >
        <Card className='h-full transition-shadow'>
          <CardContent className='p-6 flex flex-col items-center text-center'>
            <motion.div
              className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'
              variants={iconContainerVariants}
              whileHover='hover'
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)',
              }}
            >
              <motion.div variants={iconVariants} className='text-primary'>
                {icon}
              </motion.div>
            </motion.div>
            <motion.h3
              className='text-lg font-bold mb-2'
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(15px)',
              }}
            >
              {title}
            </motion.h3>
            <motion.p
              className='text-muted-foreground'
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(10px)',
              }}
            >
              {content}
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section className='py-20 pt-32 relative overflow-hidden'>
      <AnimatedBackground />

      <div className='container mx-auto px-4'>
        <AnimatedTitle
          title='Get In Touch'
          subtitle='Feel free to contact me for any work or suggestions'
        />

        <motion.div
          className='grid md:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <ContactCard
            icon={<MapPinIcon className='h-6 w-6' />}
            title='Location'
            content='Pakhaow Village, Xaythany District, Vientiane Capital, Laos'
            onClick={() => {
              window.open(
                'https://www.google.com/maps/search/?api=1&query=Pakhaow+Village,+Xaythany+District,+Vientiane+Capital,+Laos',
                '_blank'
              );
            }}
          />

          <ContactCard
            icon={<EnvelopeIcon className='h-6 w-6' />}
            title='Email'
            content='souliyapps@gmail.com'
            onClick={() => {
              window.location.href = 'mailto:souliyapps@gmail.com';
            }}
          />

          <ContactCard
            icon={<PhoneIcon className='h-6 w-6' />}
            title='Phone'
            content='(+856) 20-78287509, 91182391'
            onClick={() => {
              window.location.href = 'https://wa.me/8562078287509';
            }}
          />
        </motion.div>

        <motion.div
          className='mt-12 max-w-3xl mx-auto'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        >
          <Card>
            <CardContent className='p-8'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-6 mb-6'>
                  <motion.div variants={inputVariants}>
                    <motion.div
                      whileFocus='focus'
                      initial={{ borderColor: 'var(--border)' }}
                      whileHover={{ borderColor: 'var(--primary)' }}
                    >
                      <Input
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full transition-all'
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div variants={inputVariants}>
                    <motion.div
                      whileFocus='focus'
                      initial={{ borderColor: 'var(--border)' }}
                      whileHover={{ borderColor: 'var(--primary)' }}
                    >
                      <Input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full transition-all'
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div className='mb-6' variants={inputVariants}>
                  <motion.div
                    whileFocus='focus'
                    initial={{ borderColor: 'var(--border)' }}
                    whileHover={{ borderColor: 'var(--primary)' }}
                  >
                    <Input
                      type='text'
                      name='subject'
                      placeholder='Subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className='w-full transition-all'
                    />
                  </motion.div>
                </motion.div>
                <motion.div className='mb-6' variants={inputVariants}>
                  <motion.div
                    whileFocus='focus'
                    initial={{ borderColor: 'var(--border)' }}
                    whileHover={{ borderColor: 'var(--primary)' }}
                  >
                    <Textarea
                      name='message'
                      placeholder='Your Message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='w-full min-h-[150px] transition-all'
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  whileHover={!isSubmitting && !isSuccess ? 'hover' : undefined}
                  whileTap={!isSubmitting && !isSuccess ? 'tap' : undefined}
                  animate={
                    isSubmitting
                      ? 'submitting'
                      : isSuccess
                        ? 'success'
                        : 'visible'
                  }
                >
                  <Button
                    type='submit'
                    className='w-full md:w-auto transition-all'
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: 'linear',
                        }}
                        className='mr-2'
                      >
                        <SendIcon className='h-4 w-4' />
                      </motion.div>
                    ) : isSuccess ? (
                      <CheckIcon className='h-4 w-4 mr-2' />
                    ) : (
                      <SendIcon className='h-4 w-4 mr-2' />
                    )}
                    {isSubmitting
                      ? 'Sending...'
                      : isSuccess
                        ? 'Sent!'
                        : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
