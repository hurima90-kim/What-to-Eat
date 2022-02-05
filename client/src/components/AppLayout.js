import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function AppLayout({ children }) {
  return (
    <div>
      <div>
        <Link href="/">
          <a>왓투잇</a>
        </Link>
        <Link href="/sigin">
          <a>로그인</a>
        </Link>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
      {children}
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
