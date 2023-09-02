import { Twitter, Facebook, Instagram, Linkedin, ChevronUp } from "lucide-react";


let footer = [
  { label: "About us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Work With Us", href: "#" },
  { label: "Feedback", href: "/#" },
  { label: "Terms of Use", href: "/#" },
];

const address = [
  { label: "nanaama@gmail.com", href: "#" },
  { label: "+233 546 791 234", href: "#" },
];

export function Footer() {
  return (
    <>
      <div className="py-20 grid grid-cols-4 text-white">
        <div>
          <h4 className="font-semibold pb-2">Company</h4>
          <ul>
            {footer.map((item, i) => (
              <li key={i} className="font-normal text-xs pb-2">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold pb-2">Contact</h4>
          <ul>
            {address.map((item, i) => (
              <li key={i} className="font-normal text-xs pb-2">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold pb-2">Contact</h4>
          <ul>
            {address.map((item, i) => (
              <li key={i} className="font-normal text-xs pb-2">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold pb-2">Contact</h4>
          <ul>
            {address.map((item, i) => (
              <li key={i} className="font-normal text-xs pb-2">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pb-20 flex justify-between items-center">
        <div className="flex gap-2 item-center">
          <div className="text-white">
            <Twitter className="text-white" />
          </div>
          <div>
            <Instagram className="text-white" />
          </div>
          <div>
            <Linkedin className="text-white" />
          </div>
          <div>
            <Facebook className="text-white" />
          </div>
        </div>
        <div className="text-white flex items-center gap-2">
          <p>
            <a href="#top">Back to top</a> 
          </p>
          <ChevronUp />
        </div>
      </div>
    </>
  );
}
