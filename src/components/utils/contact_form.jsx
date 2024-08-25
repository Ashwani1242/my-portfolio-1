import Swal from 'sweetalert2';
import { useRef } from "react";
import { ACCESS_KEY } from '../../config';

const ContactForm = (props) => {

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const formRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            Toast.fire({
                icon: "success",
                title: "Email Send"
            });

            if (formRef.current) {
                formRef.current.reset();
            }
        }
    };

    return (
        <section
            onMouseEnter={props.cursorHidden}
            onMouseLeave={props.cursorEnter_Contacts}
            className="contact-form justify-center items-center flex pb-6">
            <form
                ref={formRef} action="" onSubmit={onSubmit} className="flex-col p-4 space-y-2 bg-white/70 border border-black" >
                <h2 className="lg:text-[50px] md:text-[40px] text-[30px] font-semibold px-10 mb-4"> Send me an Email! </h2>
                <div className="input-box">
                    <label className="font-bold text-lg" > Name </label>
                    <input className="h-10 border border-neutral-800 p-2" type="text" placeholder="Your Name..." required name="name" />
                </div>
                <div className="input-box">
                    <label className="font-bold text-lg" > Email </label>
                    <input className="h-10 border border-neutral-800 p-2" type="text" placeholder="Your Email..." required name="email" />
                </div>
                <div className="input-box">
                    <label className="font-bold text-lg" > Message </label>
                    <textarea className="h-24 border border-neutral-800 p-2 mb-4" id="" placeholder="Your Message..." required name="message" ></textarea>
                </div>
                <button
                    type="submit"
                    className="text-lg h-10 bg-white w-full border border-black relative font-semibold group" >
                    <div className="bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-1000" />
                    <p className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-white duration-1000"> Send Email </p>
                </button>
            </form>
        </section>
    );
}

export default ContactForm;