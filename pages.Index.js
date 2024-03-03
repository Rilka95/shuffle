import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <div>
          <nav className='d-lg-none navbar navbar-light bg-white border-bottom'>
            <div className='container-fluid'>
              <a
                className='d-inline-block h3 mb-0 text-decoration-none text-white'
                href='#'
              >
                <img
                  src='sirius-assets/images/logos/sirius-logo.svg'
                  alt=''
                  width='96px'
                />
              </a>
              <button className='navbar-burger navbar-toggler' type='button'>
                <span className='navbar-toggler-icon' />
              </button>
            </div>
          </nav>
          <div
            className='position-relative navbar-menu d-none d-lg-block'
            style={{ zIndex: 9999 }}
          >
            <div
              className='navbar-backdrop d-lg-none position-fixed top-0 end-0 bottom-0 start-0 bg-dark'
              style={{ opacity: '.5' }}
            />
            <div className='position-fixed top-0 start-0 bottom-0 col-8 mw-xs px-6 pt-8 pb-8 bg-white border-end overflow-auto'>
              <a
                className='d-inline-block h3 mb-10 text-decoration-none'
                href='#'
              ></a>
              <div className='mb-10 p-4 border border-secondary shadow rounded-2 position-relative'>
                <div className='d-flex align-items-center'>
                  <img
                    className='me-4 rounded-2'
                    src='sirius-assets/images/photos/twitch.svg'
                    alt=''
                    height={40}
                  />
                  <div>
                    <p className='fw-bold text-dark mb-0'>Twitch</p>
                    <p className='mb-0'>Workspace</p>
                  </div>
                </div>
                <select
                  className='position-absolute top-0 start-0 bottom-0 end-0 form-select bg-transparent border-0'
                  name=''
                  id=''
                >
                  <option value='' />
                </select>
              </div>
              <ul className='mb-8 mb-md-24 list-unstyled'>
                <li className='mb-2'>
                  <a
                    className='d-flex py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                    href='#'
                  >
                    <svg
                      className='me-3'
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M16.8737 16.875V9.02647C16.8737 8.93939 16.8555 8.85327 16.8202 8.77363C16.785 8.69399 16.7335 8.62259 16.6691 8.56402L10.4187 2.88159C10.3036 2.77699 10.1537 2.71903 9.99821 2.71904C9.84272 2.71905 9.69281 2.77701 9.57777 2.88161L3.3282 8.56402C3.26377 8.6226 3.2123 8.69399 3.17707 8.77362C3.14185 8.85326 3.12366 8.93937 3.12366 9.02645V16.875'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M1.24866 16.875H18.7487'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M11.8732 16.8743V12.4993C11.8732 12.3336 11.8073 12.1746 11.6901 12.0574C11.5729 11.9402 11.4139 11.8743 11.2482 11.8743H8.74817C8.58241 11.8743 8.42344 11.9402 8.30623 12.0574C8.18902 12.1746 8.12317 12.3336 8.12317 12.4993V16.8743'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span>Home</span>
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    className='d-flex py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                    href='#'
                  >
                    <svg
                      className='me-3'
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.25 6.875V14.0625C1.25 14.4769 1.41462 14.8743 1.70765 15.1674C2.00067 15.4604 2.3981 15.625 2.8125 15.625'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M8.125 8.4375H14.75'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M8.125 11.5625H14.75'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M4.48138 14.0625V5C4.48138 4.83424 4.55171 4.67527 4.6769 4.55806C4.8021 4.44085 4.97189 4.375 5.14894 4.375H17.8324C18.0095 4.375 18.1793 4.44085 18.3045 4.55806C18.4297 4.67527 18.5 4.83424 18.5 5V14.375C18.5 14.7065 18.3593 15.0245 18.109 15.2589C17.8586 15.4933 17.519 15.625 17.1649 15.625H2.8125C3.03166 15.625 3.24868 15.5846 3.45115 15.5061C3.65363 15.4275 3.83761 15.3124 3.99258 15.1674C4.14755 15.0223 4.27048 14.85 4.35435 14.6604C4.43822 14.4709 4.48138 14.2677 4.48138 14.0625V14.0625Z'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span>News</span>
                    <span
                      className='d-flex ms-auto align-items-center justify-content-center bg-danger text-white rounded-circle'
                      style={{ width: 24, height: 24, fontSize: 10 }}
                    >
                      3
                    </span>
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    className='d-flex py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                    href='#'
                  >
                    <svg
                      className='me-3'
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.875 12.5C9.11866 12.5 10.9375 10.6812 10.9375 8.4375C10.9375 6.19384 9.11866 4.375 6.875 4.375C4.63134 4.375 2.8125 6.19384 2.8125 8.4375C2.8125 10.6812 4.63134 12.5 6.875 12.5Z'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M12.1416 4.52633C12.7004 4.3689 13.2864 4.33303 13.8602 4.42115C14.434 4.50927 14.9822 4.71933 15.468 5.03717C15.9538 5.35502 16.3658 5.77327 16.6763 6.26376C16.9868 6.75426 17.1886 7.30559 17.2681 7.88065C17.3476 8.4557 17.303 9.04111 17.1372 9.59745C16.9714 10.1538 16.6883 10.6681 16.307 11.1059C15.9256 11.5436 15.4549 11.8945 14.9266 12.135C14.3982 12.3755 13.8244 12.4999 13.2439 12.5'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M1.24976 15.4216C1.88424 14.5191 2.72655 13.7825 3.70558 13.274C4.68461 12.7655 5.77161 12.5 6.87482 12.5C7.97803 12.5 9.06506 12.7654 10.0441 13.2738C11.0232 13.7822 11.8656 14.5187 12.5001 15.4212'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M13.2439 12.5C14.3472 12.4992 15.4345 12.7643 16.4136 13.2728C17.3928 13.7813 18.235 14.5182 18.8689 15.4212'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span>Customers</span>
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    className='d-flex py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                    href='#'
                    data-bs-toggle='collapse'
                    data-bs-target='#menus2-1'
                  >
                    <svg
                      className='me-3'
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M17.8125 16.25H2.1875'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M7.8125 16.25V6.875H12.1875'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M16.5625 3.125H12.1875V16.25H16.5625V3.125Z'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3.4375 16.25V10.625H7.8125'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span>Analytics</span>
                    <span className='ms-auto'>
                      <svg
                        width={10}
                        height={7}
                        viewBox='0 0 10 7'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.75 1.5L5 5.25L1.25 1.5'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </a>
                  <div className='collapse ps-6' id='menus2-1'>
                    <a
                      className='d-flex mb-2 py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                      href='#'
                    >
                      <svg
                        className='me-3'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.95325 10.3282L11.8907 3.1407L16.875 3.125L16.8593 8.1093L9.67184 14.0468'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M7.8125 12.1875L12.5 7.5'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M6.41732 15.4262L4.07817 17.7654C4.02013 17.8234 3.95123 17.8695 3.8754 17.9009C3.79957 17.9323 3.7183 17.9484 3.63622 17.9484C3.55415 17.9484 3.47288 17.9323 3.39705 17.9009C3.32122 17.8695 3.25232 17.8234 3.19428 17.7654L2.23457 16.8057C2.17654 16.7476 2.1305 16.6787 2.09909 16.6029C2.06768 16.5271 2.05151 16.4458 2.05151 16.3637C2.05151 16.2817 2.06768 16.2004 2.09909 16.1246C2.1305 16.0487 2.17654 15.9798 2.23457 15.9218L4.57372 13.5826C4.63176 13.5246 4.6778 13.4557 4.70921 13.3799C4.74062 13.304 4.75678 13.2228 4.75678 13.1407C4.75678 13.0586 4.74062 12.9774 4.70921 12.9015C4.6778 12.8257 4.63176 12.7568 4.57372 12.6988L2.9419 11.0669C2.82469 10.9497 2.75885 10.7908 2.75885 10.625C2.75885 10.4592 2.82469 10.3003 2.9419 10.1831L3.93302 9.19194C4.05023 9.07473 4.2092 9.00888 4.37496 9.00888C4.54072 9.00888 4.69969 9.07473 4.8169 9.19194L10.808 15.1831C10.9252 15.3003 10.9911 15.4592 10.9911 15.625C10.9911 15.7908 10.9252 15.9497 10.808 16.0669L9.8169 17.0581C9.69969 17.1753 9.54072 17.2411 9.37496 17.2411C9.2092 17.2411 9.05023 17.1753 8.93302 17.0581L7.3012 15.4262C7.18399 15.309 7.02502 15.2432 6.85926 15.2432C6.6935 15.2432 6.53453 15.309 6.41732 15.4262V15.4262Z'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <span>Games</span>
                    </a>
                    <a
                      className='d-flex mb-2 py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                      href='#'
                    >
                      <svg
                        className='me-3'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M2.70833 15L17.2917 15C18.0971 15 18.75 14.316 18.75 13.4722V2.77778C18.75 1.93401 18.0971 1.25 17.2917 1.25L2.70833 1.25C1.90292 1.25 1.25 1.93401 1.25 2.77778V13.4722C1.25 14.316 1.90292 15 2.70833 15Z'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M12.5 18.75H7.5'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M11.25 8.125L8.75 6.875V9.375L11.25 8.125Z'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <span>Video</span>
                    </a>
                    <a
                      className='d-flex mb-2 py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                      href='#'
                    >
                      <svg
                        className='me-3'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M13.75 4.375H17.5'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M15.625 2.5V6.25'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M2.4209 16.8743C3.1893 15.5442 4.29419 14.4398 5.62456 13.672C6.95493 12.9042 8.46393 12.5 9.99997 12.5C11.536 12.5 13.045 12.9043 14.3754 13.6721C15.7057 14.44 16.8106 15.5444 17.579 16.8744'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M14.6915 9.23303C14.3573 10.1354 13.7696 10.9221 12.9991 11.4987C12.2286 12.0752 11.3081 12.417 10.348 12.483C9.38797 12.549 8.42929 12.3364 7.58713 11.8708C6.74498 11.4052 6.05517 10.7063 5.60058 9.85813C5.14599 9.00997 4.94595 8.04859 5.02449 7.0895C5.10303 6.1304 5.45682 5.21438 6.04334 4.45148C6.62987 3.68857 7.42419 3.11124 8.33088 2.78883C9.23757 2.46642 10.2181 2.41265 11.1546 2.63397'
                          stroke='#7A899B'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <span>Streamers</span>
                    </a>
                  </div>
                </li>
                <li className='mb-2'>
                  <a
                    className='d-flex py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                    href='#'
                  >
                    <svg
                      className='me-3'
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M3.54956 13.8327C2.61735 12.2612 2.29088 10.4035 2.63146 8.60832C2.97204 6.81315 3.95624 5.20407 5.39924 4.08321C6.84225 2.96235 8.6448 2.40682 10.4684 2.52094C12.292 2.63505 14.0113 3.41097 15.3033 4.70298C16.5953 5.99499 17.3712 7.71422 17.4853 9.53783C17.5995 11.3614 17.044 13.164 15.9231 14.607C14.8022 16.05 13.1932 17.0342 11.398 17.3748C9.60285 17.7154 7.7451 17.3889 6.17361 16.4567L6.17362 16.4567L3.58218 17.1971C3.47497 17.2277 3.36151 17.2291 3.25357 17.2011C3.14563 17.1732 3.04713 17.1168 2.96828 17.038C2.88943 16.9592 2.83311 16.8607 2.80514 16.7527C2.77717 16.6448 2.77857 16.5313 2.80921 16.4241L3.54962 13.8327L3.54956 13.8327Z'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M7.5 8.4375H12.5'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M7.5 11.5625H12.5'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span>Inbox</span>
                    <span className='py-1 px-2 ms-auto bg-danger text-white rounded-pill'>
                      99+
                    </span>
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    className='d-flex py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                    href='#'
                  >
                    <svg
                      className='me-3'
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M9.5995 3.44953L8.12533 2.34422C8.04623 2.28472 7.95413 2.24487 7.85661 2.22795C7.75909 2.21103 7.65894 2.21753 7.56442 2.24691C7.10786 2.38988 6.6649 2.57315 6.24079 2.79456C6.15299 2.84061 6.07741 2.90688 6.02027 2.9879C5.96313 3.06892 5.92608 3.16237 5.91218 3.26053L5.65158 5.08481C5.55224 5.17287 5.45499 5.26445 5.35982 5.35956C5.26468 5.4547 5.17308 5.55198 5.085 5.65139L5.08497 5.65142L3.261 5.91226C3.163 5.92611 3.06969 5.96306 2.98877 6.02005C2.90785 6.07705 2.84163 6.15245 2.79557 6.24006C2.57383 6.664 2.3902 7.10681 2.24686 7.56326C2.21734 7.6579 2.21076 7.75821 2.22764 7.8559C2.24453 7.95359 2.28441 8.04587 2.34399 8.12511L3.44968 9.59935C3.4417 9.73185 3.43769 9.86538 3.43766 9.99993C3.43766 10.1345 3.44167 10.268 3.44969 10.4006L3.44968 10.4007L2.34438 11.8748C2.28488 11.9539 2.24503 12.046 2.22811 12.1436C2.21119 12.2411 2.21769 12.3412 2.24707 12.4357C2.39004 12.8923 2.57331 13.3353 2.79471 13.7594C2.84076 13.8472 2.90703 13.9228 2.98805 13.9799C3.06907 14.037 3.16252 14.0741 3.26068 14.088L5.08497 14.3486C5.17302 14.4479 5.2646 14.5452 5.35972 14.6403C5.45485 14.7355 5.55213 14.8271 5.65155 14.9152L5.65158 14.9152L5.91241 16.7392C5.92627 16.8372 5.96321 16.9305 6.02021 17.0114C6.0772 17.0923 6.15261 17.1585 6.24022 17.2046C6.66416 17.4263 7.10696 17.61 7.56341 17.7533C7.65806 17.7828 7.75837 17.7894 7.85606 17.7725C7.95375 17.7556 8.04602 17.7157 8.12527 17.6562L9.59951 16.5505C9.73201 16.5585 9.86553 16.5625 10.0001 16.5625C10.1346 16.5625 10.2682 16.5585 10.4008 16.5505L10.4008 16.5505L11.875 17.6558C11.9541 17.7153 12.0462 17.7551 12.1437 17.7721C12.2412 17.789 12.3414 17.7825 12.4359 17.7531C12.8925 17.6101 13.3354 17.4269 13.7595 17.2055C13.8473 17.1594 13.9229 17.0931 13.98 17.0121C14.0372 16.9311 14.0742 16.8376 14.0881 16.7395L14.3487 14.9152C14.4481 14.8271 14.5453 14.7356 14.6405 14.6404C14.7356 14.5453 14.8272 14.448 14.9153 14.3486L14.9153 14.3486L16.7393 14.0878C16.8373 14.0739 16.9306 14.037 17.0115 13.98C17.0925 13.923 17.1587 13.8476 17.2047 13.7599C17.4265 13.336 17.6101 12.8932 17.7535 12.4367C17.783 12.3421 17.7896 12.2418 17.7727 12.1441C17.7558 12.0464 17.7159 11.9541 17.6563 11.8749L16.5506 10.4007C16.5586 10.2682 16.5626 10.1346 16.5627 10.0001C16.5627 9.86554 16.5586 9.73198 16.5506 9.5994L16.5506 9.59935L17.6559 8.12517C17.7154 8.04608 17.7553 7.95397 17.7722 7.85645C17.7891 7.75893 17.7826 7.65879 17.7532 7.56427C17.6103 7.10771 17.427 6.66475 17.2056 6.24063C17.1595 6.15284 17.0933 6.07725 17.0123 6.02012C16.9312 5.96298 16.8378 5.92593 16.7396 5.91203L14.9153 5.65142C14.8273 5.55209 14.7357 5.45484 14.6406 5.35967C14.5455 5.26453 14.4482 5.17293 14.3488 5.08485L14.3487 5.08481L14.0879 3.26085C14.074 3.16284 14.0371 3.06954 13.9801 2.98862C13.9231 2.90769 13.8477 2.84148 13.7601 2.79542C13.3362 2.57367 12.8933 2.39005 12.4369 2.24671C12.3423 2.21719 12.2419 2.2106 12.1443 2.22749C12.0466 2.24438 11.9543 2.28426 11.875 2.34384L10.4008 3.44953C10.2683 3.44155 10.1348 3.43754 10.0002 3.4375C9.86569 3.4375 9.73213 3.44151 9.59955 3.44953L9.5995 3.44953Z'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span>Settings</span>
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    className='d-flex py-3 px-4 align-items-center text-decoration-none text-muted fw-bold'
                    href='#'
                  >
                    <svg
                      className='me-3'
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M7.79037 7.79028L4.69678 4.69669'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M12.2097 7.79028L15.3033 4.69669'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M12.2097 12.2097L15.3033 15.3033'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M7.79037 12.2097L4.69678 15.3033'
                        stroke='#7A899B'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span>Support</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='mx-auto ms-lg-80 ps-lg-4'>
            <section>
              <nav className='navbar navbar-expand-lg navbar-light bg-white'>
                <div className='container-fluid'>
                  <button
                    className='navbar-burger navbar-toggler'
                    type='button'
                  >
                    <span className='navbar-toggler-icon' />
                  </button>
                  <div className='collapse navbar-collapse'>
                    <div className='d-flex align-items-center'>
                      <div
                        className='d-flex align-items-center justify-content-center me-4 border rounded-2'
                        style={{ width: 40, height: 40 }}
                      >
                        <img
                          src='images/DBS-logo-jpeg-1709352645826.webp'
                          alt=''
                        />
                      </div>
                      <div className='me-4'>
                        <p className='mb-0 fw-bold text-dark'>
                          DBS EMPLOYEE PORTAL
                        </p>
                      </div>
                      <a href='#'>
                        <svg
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 5.99998V1.33331'
                            stroke='#7A899B'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10.6666 3.99998L7.99992 1.33331L5.33325 3.99998'
                            stroke='#7A899B'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M8 10V14.3333'
                            stroke='#7A899B'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M5.33325 12L7.99992 14.6667L10.6666 12'
                            stroke='#7A899B'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                    <form className='position-absolute top-50 start-50 translate-middle d-flex me-auto'>
                      <div className='input-group'>
                        <input
                          className='form-control'
                          type='search'
                          placeholder='Type to search...'
                          aria-label='Type to serach'
                          aria-describedby='basic-addon'
                        />
                        <span
                          className='input-group-text bg-transparent px-4'
                          id='basic-addon2'
                        >
                          <svg
                            width={12}
                            height={12}
                            viewBox='0 0 12 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z'
                              stroke='#7A899B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M8.22156 8.22192L10.4997 10.5001'
                              stroke='#7A899B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </span>
                      </div>
                    </form>
                    <div className='ms-auto'>
                      <a
                        className='btn btn-outline-light d-inline-flex align-items-center justify-content-center p-0 me-2 shadow rounded-2'
                        href='#'
                        style={{ width: 40, height: 40 }}
                      >
                        <svg
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.12974 8.29964C1.57041 7.35675 1.37453 6.2421 1.57887 5.165C1.78322 4.0879 2.37374 3.12245 3.23955 2.44994C4.10535 1.77742 5.18688 1.4441 6.28105 1.51257C7.37522 1.58104 8.40676 2.04659 9.18197 2.8218C9.95718 3.597 10.4227 4.62854 10.4912 5.72271C10.5597 6.81688 10.2264 7.89841 9.55386 8.76422C8.88135 9.63003 7.9159 10.2206 6.8388 10.4249C5.76171 10.6293 4.64706 10.4334 3.70416 9.87406L3.70417 9.87401L2.14931 10.3183C2.08498 10.3366 2.01691 10.3375 1.95214 10.3207C1.88738 10.3039 1.82828 10.2701 1.78097 10.2228C1.73366 10.1755 1.69986 10.1164 1.68308 10.0516C1.6663 9.98687 1.66714 9.9188 1.68552 9.85447L2.12977 8.29961L2.12974 8.29964Z'
                            stroke='#7A899B'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                      <a
                        className='btn btn-outline-light d-inline-flex align-items-center justify-content-center p-0 me-2 shadow rounded-2'
                        href='#'
                        style={{ width: 40, height: 40 }}
                      >
                        <svg
                          width={10}
                          height={12}
                          viewBox='0 0 10 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M4 11H6'
                            stroke='#7A899B'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M1.6988 4.14999C1.69819 3.73489 1.78393 3.32378 1.95108 2.94036C2.11823 2.55694 2.36348 2.20879 2.6727 1.91598C2.98192 1.62317 3.34899 1.39148 3.75275 1.23429C4.15651 1.07709 4.58897 0.997483 5.02522 1.00006C6.84554 1.01294 8.30157 2.45262 8.30157 4.18953V4.49999C8.30157 6.06693 8.64611 6.9762 8.94956 7.47317C8.98225 7.52627 8.99965 7.58663 8.99999 7.64817C9.00034 7.70971 8.98362 7.77025 8.95153 7.82368C8.91944 7.87711 8.87311 7.92155 8.81721 7.9525C8.76131 7.98346 8.69783 7.99984 8.63315 8H1.36685C1.30217 7.99984 1.23867 7.98345 1.18277 7.95249C1.12686 7.92153 1.08053 7.87708 1.04844 7.82364C1.01636 7.7702 0.999648 7.70965 1.00001 7.64811C1.00036 7.58656 1.01777 7.52619 1.05048 7.47309C1.3541 6.97611 1.69879 6.06685 1.69879 4.49999L1.6988 4.14999Z'
                            stroke='#7A899B'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                      <a className='me-2' href='#'>
                        <img
                          className='img-fluid rounded-1'
                          style={{ width: 40, height: 40 }}
                          src='https://images.unsplash.com/photo-1593789382576-54f489574d26?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </section>
            <form action='#' method='post' />
          </div>
        </div>
        <section>
          <nav className='navbar navbar-expand-lg navbar-light bg-white'>
            <div className='container-fluid'>
              <button className='navbar-burger navbar-toggler' type='button'>
                <span className='navbar-toggler-icon' />
              </button>
            </div>
          </nav>
        </section>
      </>
    </React.Fragment>
  );
}

