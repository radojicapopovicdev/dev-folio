const Footer = () => {
  return (
    <div
      id="footer-wrapper"
      className="bg-[#000000] 3xl:h-[20vh] 2xl:h-[20vh] xl:h-[20vh] lg:h-[20vh] md:h-[20vh] sm:h-[20vh] smx:h-[20vh]
       text-white flex flex-col items-center justify-center space-y-4"
    >
      {/* Contact Information */}
      <p>
        Email:{" "}
        <a href="mailto:your.email@example.com" className="text-[#4E6E58]">
          radojicapopovic@icloud.com
        </a>
      </p>

      {/* Social Media Links */}
      <div>
        <a href="https://linkedin.com/in/yourprofile" className="mr-4">
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" className="mr-4">
          GitHub
        </a>
        <a href="https://twitter.com/yourhandle">Twitter</a>
      </div>

      {/* Quick Links */}
      <div>
        <a href="/about" className="mr-4">
          About
        </a>
        <a href="/projects" className="mr-4">
          Projects
        </a>
        <a href="/resume">Resume</a>
      </div>

      {/* Copyright Notice */}
      <p>© 2024 Radojica Popovic</p>
    </div>
  );
};

export default Footer;
