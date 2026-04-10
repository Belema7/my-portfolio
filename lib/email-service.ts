import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export const sendEmail = async (formData: {
    name: string;
    email: string;
    message: string;
}) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('EmailJS credentials are missing');
        throw new Error('Email service is not configured correctly.');
    }

    const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: 'New Portfolio Contact',
        time: new Date().toLocaleString(),
    };

    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};
