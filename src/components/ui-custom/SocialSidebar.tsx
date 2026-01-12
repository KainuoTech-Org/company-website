"use client";

import React from 'react';
import clsx from 'clsx';

export default function SocialSidebar() {
  return (
    <div className="social-dock">
      {/* XiaoHongShu - Will be at the bottom because of column-reverse */}
      <a href="https://www.xiaohongshu.com/user/profile/62cea13a0000000002002ea2" target="_blank" rel="noopener noreferrer" className="Btn xiaohongshu">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/xiaohongshu/white" alt="XiaoHongShu" />
        </div>
        <div className="text">XiaoHongShu</div>
      </a>

      {/* Facebook */}
      <a href="https://www.facebook.com/people/Kainuo-Innovision-Tech/61584470712451/" target="_blank" rel="noopener noreferrer" className="Btn facebook">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/facebook/white" alt="Facebook" />
        </div>
        <div className="text">Facebook</div>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/kainuo_innovision_tech/" target="_blank" rel="noopener noreferrer" className="Btn instagram">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" />
        </div>
        <div className="text">Instagram</div>
      </a>

      {/* GitHub */}
      <a href="https://github.com/KainuoTech-Org" target="_blank" rel="noopener noreferrer" className="Btn github">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
        </div>
        <div className="text">GitHub</div>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/company/kainuo-tech/" target="_blank" rel="noopener noreferrer" className="Btn linkedin">
        <div className="sign">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </div>
        <div className="text">LinkedIn</div>
      </a>

      {/* WhatsApp - Will be at the top because of column-reverse */}
      <a href="https://wa.me/85293412653" target="_blank" rel="noopener noreferrer" className="Btn whatsapp">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/whatsapp/white" alt="WhatsApp" />
        </div>
        <div className="text">WhatsApp</div>
      </a>
    </div>
  );
}
