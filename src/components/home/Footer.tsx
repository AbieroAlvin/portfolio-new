import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#33323d] px-32 flex items-center justify-between py-8 desktop:px-20 tablet:px-10 tablet:flex-col tablet:gap-12">
      <p className="text-[1.2rem] tracking-[0.2rem] uppercase text-white">
        &copy; {new Date().getFullYear()} Alvin Abiero
      </p>
      <div className="flex items-center gap-8 mobile:flex-col">
        <p className="text-[1.3rem] text-white">Connect with me:</p>
        <Link
          to="https://github.com/AbieroAlvin"
          className="border-b border-transparent hover:border-white transition-all duration-300 text-[1.2rem] tracking-[0.2rem] text-white"
          target="_blank"
        >
          Github
        </Link>
        <Link
          to="https://twitter.com/Alvin_Abiero"
          className="border-b border-transparent hover:border-white transition-all duration-300 text-[1.2rem] tracking-[0.2rem] text-white"
          target="_blank"
        >
          Twitter
        </Link>
        <Link
          to="https://linkedin.com/in/alvinabiero"
          className="border-b border-transparent hover:border-white transition-all duration-300 text-[1.2rem] tracking-[0.2rem] text-white"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          to="mailto:abieroalvin@gmail.com"
          className="border-b border-transparent hover:border-white transition-all duration-300 text-[1.2rem] tracking-[0.2rem] text-white"
          target="_blank"
        >
          Gmail
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
