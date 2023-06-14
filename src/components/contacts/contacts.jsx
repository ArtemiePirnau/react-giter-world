import close from "../../../public/images/close.svg";
export const Contacts = ({ toggleHide }) => {
  return (
    <div className="contacts">
      <div className="contacts__inner">
        <div className="contacts__title">
          <h3 className="title">Contacts</h3>
          <img
            onClick={toggleHide}
            className="contacts__img"
            src={close}
            alt="close"
          />
        </div>
        <ul className="contacts__list">
          <li className="contacts__item">
            <a href="#" className="contacts__link">
              <svg
                className="contacts__item-img"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7C11.0111 7 10.0444 7.29324 9.22215 7.84265C8.3999 8.39206 7.75904 9.17295 7.3806 10.0866C7.00216 11.0002 6.90315 12.0055 7.09607 12.9755C7.289 13.9454 7.7652 14.8363 8.46447 15.5355C9.16373 16.2348 10.0546 16.711 11.0245 16.9039C11.9945 17.0969 12.9998 16.9978 13.9134 16.6194C14.827 16.241 15.6079 15.6001 16.1573 14.7779C16.7068 13.9556 17 12.9889 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM17 6C16.8022 6 16.6089 6.05865 16.4444 6.16853C16.28 6.27841 16.1518 6.43459 16.0761 6.61732C16.0004 6.80004 15.9806 7.00111 16.0192 7.19509C16.0578 7.38907 16.153 7.56725 16.2929 7.70711C16.4327 7.84696 16.6109 7.9422 16.8049 7.98079C16.9989 8.01937 17.2 7.99957 17.3827 7.92388C17.5654 7.84819 17.7216 7.72002 17.8315 7.55557C17.9414 7.39112 18 7.19778 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM21.94 8.24C21.9234 7.38542 21.7611 6.53995 21.46 5.74C21.1808 5.01207 20.7516 4.35099 20.2003 3.7997C19.649 3.2484 18.9879 2.81922 18.26 2.54C17.4601 2.2389 16.6146 2.07657 15.76 2.06C14.79 2 14.47 2 12 2C9.53 2 9.21 2 8.24 2.06C7.38542 2.07657 6.53995 2.2389 5.74 2.54C5.01207 2.81922 4.35099 3.2484 3.7997 3.7997C3.2484 4.35099 2.81922 5.01207 2.54 5.74C2.2389 6.53995 2.07657 7.38542 2.06 8.24C2 9.22 2 9.54 2 12C2 14.46 2 14.78 2.06 15.76C2.07657 16.6146 2.2389 17.4601 2.54 18.26C2.81922 18.9879 3.2484 19.649 3.7997 20.2003C4.35099 20.7516 5.01207 21.1808 5.74 21.46C6.53995 21.7611 7.38542 21.9234 8.24 21.94C9.24 21.94 9.53 22 12 22C14.47 22 14.79 22 15.76 21.94C16.6146 21.9234 17.4601 21.7611 18.26 21.46C18.9879 21.1808 19.649 20.7516 20.2003 20.2003C20.7516 19.649 21.1808 18.9879 21.46 18.26C21.7611 17.4601 21.9234 16.6146 21.94 15.76C21.94 14.76 22 14.46 22 12C22 9.54 22 9.22 21.94 8.24ZM19.94 15.67C19.9225 16.3046 19.8043 16.9324 19.59 17.53C19.4128 18.0023 19.1327 18.4293 18.77 18.78C18.4214 19.1428 17.9936 19.4201 17.52 19.59C16.921 19.8131 16.289 19.9348 15.65 19.95C14.71 19.95 14.42 20 11.99 20C9.56 20 9.28 20 8.34 20C7.70202 19.9835 7.07075 19.8654 6.47 19.65C5.99766 19.4728 5.57067 19.1927 5.22 18.83C4.85715 18.4814 4.57992 18.0536 4.41 17.58C4.1878 16.9842 4.06615 16.3557 4.05 15.72C4.05 14.72 4.05 14.47 4.05 12.05C4.05 9.63 4.05 9.34 4.05 8.38C4.06724 7.74121 4.18884 7.10954 4.41 6.51C4.58256 6.04063 4.85953 5.61662 5.22 5.27C5.56858 4.90715 5.99641 4.62992 6.47 4.46C7.06899 4.2369 7.70099 4.11523 8.34 4.1C9.28 4 9.57 4 12 4C14.43 4 14.72 4 15.66 4C16.3021 4.01633 16.9373 4.13794 17.54 4.36C18.0094 4.53256 18.4334 4.80953 18.78 5.17C19.1428 5.51858 19.4201 5.94641 19.59 6.42C19.8348 7.02856 19.9735 7.67458 20 8.33C20 9.33 20.05 9.58 20.05 12C20.05 14.42 20 14.71 20 15.67H19.94Z"
                  fill="#1E1E1E"
                />
              </svg>
              <span>Instagram</span>
            </a>
          </li>
          <li className="contacts__item">
            <a href="#" className="contacts__link">
              <svg
                className="contacts__item-img"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="#1E1E1E"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.19814 19.5H7.19814V11.4901H10.8022L11.1981 7.50977H7.19814V5.5C7.19814 4.94772 7.64585 4.5 8.19814 4.5H11.1981V0.5H8.19814C5.43671 0.5 3.19814 2.73858 3.19814 5.5V7.50977H1.19814L0.802246 11.4901H3.19814V19.5Z"
                  fill="#1E1E1E"
                />
              </svg>
              <span>Facebook</span>
            </a>
          </li>
          <li className="contacts__item">
            <a href="#" className="contacts__link">
              <svg
                className="contacts__item-img"
                width="36"
                height="36"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9912 3.95021C22.9913 3.77357 22.9446 3.60007 22.8559 3.44735C22.7671 3.29464 22.6395 3.16817 22.4859 3.08084C22.3324 2.9935 22.1585 2.94842 21.9819 2.95017C21.8052 2.95193 21.6322 3.00046 21.4805 3.09083C20.8951 3.43921 20.265 3.70601 19.6075 3.88383C18.6684 3.07806 17.4708 2.63713 16.2335 2.64164C14.876 2.6432 13.5723 3.17223 12.5977 4.11702C11.623 5.06181 11.0536 6.3484 11.0098 7.70512C8.33381 7.27838 5.90846 5.88164 4.19628 3.78126C4.09312 3.65609 3.96136 3.55757 3.81214 3.494C3.66291 3.43043 3.50059 3.40368 3.33886 3.41601C3.17722 3.42932 3.02125 3.4818 2.88445 3.56892C2.74765 3.65603 2.63413 3.77516 2.5537 3.91601C2.14123 4.63582 1.90433 5.44276 1.86225 6.27131C1.82017 7.09986 1.97409 7.92666 2.31151 8.68456L2.30956 8.68651C2.15791 8.77991 2.03275 8.91066 1.94606 9.06625C1.85938 9.22185 1.81406 9.39708 1.81444 9.57519C1.8126 9.72211 1.82142 9.86898 1.84081 10.0146C1.94295 11.2729 2.50059 12.4507 3.40917 13.3271C3.34753 13.4446 3.30991 13.5731 3.29851 13.7052C3.28711 13.8373 3.30215 13.9704 3.34276 14.0967C3.73887 15.3308 4.58126 16.3727 5.70507 17.0185C4.56331 17.46 3.33049 17.614 2.11522 17.4668C1.89029 17.4386 1.66245 17.4876 1.46907 17.6059C1.27569 17.7242 1.12825 17.9047 1.05093 18.1178C0.973623 18.3309 0.97103 18.5639 1.04358 18.7787C1.11613 18.9935 1.25952 19.1772 1.45022 19.2998C3.54031 20.646 5.9739 21.3617 8.45999 21.3613C11.2792 21.393 14.03 20.4921 16.2842 18.7988C18.5385 17.1054 20.1699 14.7145 20.9248 11.998C21.2779 10.8146 21.4581 9.58648 21.46 8.35157C21.46 8.28614 21.46 8.21876 21.459 8.15138C21.9811 7.58831 22.3856 6.92668 22.6487 6.20527C22.9118 5.48387 23.0282 4.7172 22.9912 3.95021ZM19.6846 7.16212C19.5194 7.35746 19.4358 7.60891 19.4512 7.86427C19.4609 8.02927 19.4599 8.19527 19.4599 8.35157C19.4579 9.39511 19.3049 10.4329 19.0058 11.4326C18.3893 13.744 17.015 15.7817 15.1029 17.2192C13.1909 18.6568 10.8517 19.4111 8.45999 19.3613C7.60087 19.3616 6.74471 19.2606 5.90921 19.0606C6.97462 18.7172 7.9708 18.1879 8.85159 17.4971C9.01381 17.3693 9.13254 17.1945 9.19148 16.9967C9.25041 16.7988 9.24667 16.5875 9.18076 16.3918C9.11486 16.1961 8.99002 16.0257 8.82337 15.9038C8.65672 15.7819 8.45643 15.7145 8.24999 15.7109C7.41882 15.698 6.62512 15.363 6.03612 14.7764C6.18554 14.7481 6.33398 14.7129 6.48144 14.6709C6.69745 14.6094 6.88648 14.477 7.0181 14.295C7.14972 14.1131 7.21626 13.8921 7.20701 13.6677C7.19777 13.4433 7.11327 13.2285 6.96712 13.058C6.82098 12.8874 6.6217 12.7711 6.40136 12.7275C5.9189 12.6323 5.46491 12.427 5.07467 12.1277C4.68444 11.8284 4.36848 11.4432 4.15136 11.002C4.33209 11.0266 4.51397 11.0419 4.69628 11.0479C4.91286 11.0511 5.12487 10.9854 5.30166 10.8603C5.47844 10.7351 5.61083 10.5569 5.67968 10.3516C5.74566 10.1443 5.74226 9.92123 5.67001 9.7161C5.59775 9.51096 5.46058 9.33499 5.27929 9.21485C4.83944 8.92182 4.47913 8.52427 4.23065 8.0578C3.98216 7.59134 3.85325 7.07052 3.85546 6.54201C3.85546 6.47561 3.85741 6.4092 3.86132 6.34377C6.10258 8.43402 9.00964 9.66621 12.0703 9.82326C12.2248 9.82934 12.3787 9.80024 12.5203 9.73816C12.6619 9.67607 12.7875 9.58262 12.8877 9.46486C12.9869 9.34596 13.0571 9.20566 13.0929 9.05501C13.1286 8.90437 13.1289 8.74748 13.0937 8.5967C13.0365 8.35806 13.0074 8.11357 13.0068 7.86818C13.0077 7.01271 13.3479 6.19254 13.9529 5.58764C14.5578 4.98274 15.3779 4.64251 16.2334 4.64161C16.6735 4.64043 17.1091 4.7305 17.5127 4.90615C17.9163 5.0818 18.279 5.3392 18.5781 5.66212C18.6934 5.7862 18.8386 5.87871 18.9998 5.93085C19.161 5.98299 19.3328 5.99303 19.499 5.96001C19.9098 5.88006 20.3147 5.7724 20.7109 5.63775C20.4406 6.19072 20.0953 6.70369 19.6846 7.16212Z"
                  fill="#1E1E1E"
                />
              </svg>
              <span>Twitter</span>
            </a>
          </li>
          <li className="contacts__item">
            <a href="#" className="contacts__link">
              <svg
                className="contacts__item-img"
                width="30"
                height="30"
                viewBox="0 0 21 21"
                fill="#1E1E1E"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 3H18C18.5523 3 19 3.44771 19 4V12C19 12.5523 18.5523 13 18 13H4C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3ZM1 4C1 2.34315 2.34315 1 4 1H18C19.6569 1 21 2.34315 21 4V12C21 13.6569 19.6569 15 18 15H4C2.34315 15 1 13.6569 1 12V4ZM9 5L13 8L9 11V5Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                />
              </svg>
              <span>Youtube</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};