import { cloneElement } from 'react';

interface FooterBtnProps {
  isCurrentPage: boolean;
  text: string;
  handleFooterBtn?: () => void;
  children: JSX.Element;
}

export default function FooterBtn(props: FooterBtnProps) {
  const { isCurrentPage, text, handleFooterBtn, children } = props;
  const fonts = isCurrentPage ? 'fonts-footer-activeicon' : 'fonts-footer-inactiveicon';

  return (
    <button className="flex flex-col items-center" onClick={handleFooterBtn}>
      {cloneElement(children)}
      <p className={`${fonts}`}>{text}</p>
    </button>
  );
}
