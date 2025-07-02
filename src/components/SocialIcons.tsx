import { Github, Twitter, Globe } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    { icon: Globe, href: 'https://arttentionmedia.pro/', label: 'Website' },
    { icon: Twitter, href: 'https://x.com/0x3Matt', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/0x3Matt/', label: 'GitHub' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <div className="flex space-x-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="group relative w-10 h-10 flex items-center justify-center rounded-full chaos-glass hover:chaos-glow transition-all duration-300 hover:scale-110"
            aria-label={label}
          >
            <Icon 
              size={18} 
              className="text-chaos-text-mono group-hover:text-primary transition-colors duration-300" 
            />
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full bg-chaos-glow/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
            
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;