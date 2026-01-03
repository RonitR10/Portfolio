import { Mail, Phone, MapPin, Github, Linkedin, FileText } from "lucide-react";

export default function Contact() {
    return (
        <section className="bg-black rounded-4xl text-white px-6 md:px-20 py-16 min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url("/images/bg8.jpg")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 0.95,
            }}
        >
            <div className="max-w-4xl w-full">
                <h2 className="text-4xl font-bold mb-6 text-yellow-400">📞 Contact Me</h2>
                <p className="text-gray-400 mb-10 text-lg">
                    I would love to hear from you! Whether it’s a project, job opportunity, or just a chat —
                    feel free to reach out.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="text-yellow-400" />
                            <a href="mailto:ronitinnitt@gmail.com" className="hover:underline">
                                ronitinnitt@gmail.com
                            </a>
                        </div>

                        {/* <div className="flex items-center gap-3">
                            <Phone className="text-yellow-400" />
                            <a href="tel:+911234567890" className="hover:underline">
                                +91 12345 67890
                            </a>
                        </div> */}

                        <div className="flex items-center gap-3">
                            <MapPin className="text-yellow-400" />
                            <span>Indore, Madhya Pradesh, India</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FileText className="text-yellow-400" />
                            <a
                                href="/Ronit_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Github className="text-yellow-400" />
                            <a
                                href="https://github.com/RonitR10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                github.com/RonitR10
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <Linkedin className="text-yellow-400" />
                            <a
                                href="https://www.linkedin.com/in/ronit-raj-bairwa-531759248/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                linkedin.com/in/ronit
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
