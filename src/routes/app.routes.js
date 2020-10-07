import { Router } from 'express';
import nodemailer from 'nodemailer';
import Image from '../model/Image';
const router = Router();

router.get('/images', async (req, res) => {
    const images = await Image.find();
    res.status(200).json(images);
    res.redirect('/');
})

router.post('/contact/mail', async (req, res) => {

    try {
        const { name, lastname, email, comment, phone } = req.body

        const contentHTML = `
        <h3>${name}\s${lastname}</h3>
        <p>${comment}</p>
        <p>Mi numero es: ${phone}</p>
        `
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: false,
            auth: {
                user: process.env.USERNAME,
                pass: process.env.PASSWORD
            }
        });

        await transporter.sendMail({
            from: `${lastname},\s${name}<${email}>`,
            to: 'info@kuscococina.com',
            cc: 'Consulta de Catering',
            html: contentHTML
        })

        res.redirect('/contact');
    } catch (err) {
        console.error(err)
    }
})
export default router;