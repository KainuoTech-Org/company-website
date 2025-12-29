"use client";

import React from 'react';
import clsx from 'clsx';

export default function SocialSidebar() {
  return (
    <div className="social-dock">
      {/* WhatsApp */}
      <a href="https://wa.me/85293412653" target="_blank" rel="noopener noreferrer" className="Btn whatsapp">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/whatsapp/white" alt="WhatsApp" />
        </div>
        <div className="text">WhatsApp</div>
      </a>

      {/* WeChat - Added as requested */}
      <a href="#" onClick={(e) => { e.preventDefault(); alert('WeChat ID: KainuoTech'); }} className="Btn wechat" style={{ backgroundColor: '#07C160' }}>
        <div className="sign">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.067 5.591-.139.558-.505 1.968-.578 2.241-.101.378.14.376.295.27.245-.168 1.652-1.112 2.308-1.555.774.22 1.597.338 2.449.338.358 0 .708-.023 1.053-.061-.03-.238-.052-.479-.052-.724 0-3.924 3.657-7.105 8.168-7.105 1.006 0 1.972.16 2.873.453C18.667 4.88 14.102 2.188 8.691 2.188zm8.019 7.444c-3.692 0-6.686 2.624-6.686 5.86 0 1.968.167 1.83 2.134 3.208-.101.408-.363 1.442-.416 1.641-.073.277.103.275.215.197.179-.123 1.209-.815 1.691-1.14 1.139 1.187 6.643 2.508 8.016 1.229 1.464-1.364 1.732-3.218 1.732-5.135 0-3.236-2.994-5.86-6.686-5.86zM6.216 5.856c.49 0 .886.353.886.79 0 .436-.396.79-.886.79-.49 0-.886-.354-.886-.79 0-.437.396-.79.886-.79zm4.771 0c.49 0 .886.353.886.79 0 .436-.397.79-.886.79-.49 0-.886-.354-.886-.79 0-.437.396-.79.886-.79zM14.6 13.06c-.44 0-.796-.318-.796-.71s.356-.71.796-.71c.44 0 .796.318.796.71s-.356.71-.796.71zm4.275 0c-.44 0-.796-.318-.796-.71s.356-.71.796-.71c.44 0 .796.318.796.71s-.356.71-.796.71z"/>
          </svg>
        </div>
        <div className="text">WeChat</div>
      </a>

      {/* LinkedIn - Using SVG path for reliability as in original */}
      <a href="https://www.linkedin.com/company/kainuo-tech/" target="_blank" rel="noopener noreferrer" className="Btn linkedin">
        <div className="sign">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </div>
        <div className="text">LinkedIn</div>
      </a>

      {/* GitHub */}
      <a href="https://github.com/KainuoTech-Org" target="_blank" rel="noopener noreferrer" className="Btn github">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
        </div>
        <div className="text">GitHub</div>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/kainuo_innovision_tech/" target="_blank" rel="noopener noreferrer" className="Btn instagram">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" />
        </div>
        <div className="text">Instagram</div>
      </a>

      {/* Facebook */}
      <a href="https://www.facebook.com/people/Kainuo-Innovision-Tech/61584470712451/" target="_blank" rel="noopener noreferrer" className="Btn facebook">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/facebook/white" alt="Facebook" />
        </div>
        <div className="text">Facebook</div>
      </a>

      {/* XiaoHongShu */}
      <a href="https://www.xiaohongshu.com/user/profile/62cea13a0000000002002ea2" target="_blank" rel="noopener noreferrer" className="Btn xiaohongshu">
        <div className="sign">
          <img src="https://cdn.simpleicons.org/xiaohongshu/white" alt="XiaoHongShu" />
        </div>
        <div className="text">XiaoHongShu</div>
      </a>
    </div>
  );
}
