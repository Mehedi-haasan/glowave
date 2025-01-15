import Link from 'next/link';
import React from 'react';

function Header() {
    let style1 = {
        transform: 'none',
        transformOrigin: '0px 0px',
        visibility: 'visible',
    }
    return (
        <header className='w-full sticky top-0 left-0 right-0 bg-white z-50'>
            <div className='px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px]'>
                <div className='flex justify-between items-center w-full h-[60px] lg:h-[100px]'>
                    <div className='flex justify-start'>
                        <svg width="155" height="34" viewBox="0 0 155 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.08 17.496C27.208 17.496 27.32 17.544 27.416 17.64C27.512 17.736 27.56 17.848 27.56 17.976C27.56 18.2 27.4 18.376 27.08 18.504C26.376 18.76 25.928 19.144 25.736 19.656C25.576 20.168 25.496 20.888 25.496 21.816V30.84C25.496 31.032 25.432 31.192 25.304 31.32C25.176 31.416 25.032 31.464 24.872 31.464C22.504 31.464 20.824 31.672 19.832 32.088C18.04 32.728 16.2 33.032 14.312 33C8.776 33 4.744 31.336 2.216 28.008C1.864 27.528 1.56 27.048 1.304 26.568C1.272 26.536 1.176 26.392 1.016 26.136C0.92 25.912 0.84 25.72 0.776 25.56C0.744 25.496 0.728 25.464 0.728 25.464C0.664 25.368 0.616 25.288 0.584 25.224C0.552 25.096 0.52 24.984 0.488 24.888C0.264 24.312 0.136 23.8 0.104 23.352C0.0720001 22.872 0.12 22.456 0.248 22.104C0.408 21.72 0.584 21.4 0.776 21.144C0.968 20.856 1.24 20.6 1.592 20.376C1.976 20.152 2.312 19.976 2.6 19.848C2.888 19.688 3.24 19.512 3.656 19.32C5.192 18.712 6.088 18.232 6.344 17.88C6.696 17.368 6.696 16.92 6.344 16.536C5.992 16.12 5.336 15.592 4.376 14.952C4.28 14.888 4.2 14.84 4.136 14.808C4.104 14.776 4.04 14.744 3.944 14.712C3.88 14.648 3.816 14.6 3.752 14.568C3.272 14.248 2.856 13.96 2.504 13.704C2.184 13.416 1.848 13.064 1.496 12.648C1.144 12.232 0.904 11.832 0.776 11.448C0.648 11.032 0.6 10.536 0.632 9.96C0.696 9.384 0.872 8.776 1.16 8.136C1.16 8.136 1.176 8.12 1.208 8.088C1.464 7.576 1.768 7.08 2.12 6.6C2.12 6.6 2.152 6.568 2.216 6.504C4.808 2.984 8.824 1.224 14.264 1.224C17.176 1.224 19.496 1.976 21.224 3.48L21.272 3.528C22.328 4.36 23 3.944 23.288 2.28C23.288 1.992 23.448 1.832 23.768 1.8C23.928 1.8 24.056 1.848 24.152 1.944C24.248 2.04 24.296 2.152 24.296 2.28V8.568C24.296 8.888 24.136 9.048 23.816 9.048H23.768C23.512 9.048 23.352 8.936 23.288 8.712C23.288 8.68 23.288 8.664 23.288 8.664C23.288 8.632 23.288 8.6 23.288 8.568C23.192 8.056 22.968 7.48 22.616 6.84C22.296 6.2 21.816 5.528 21.176 4.824C20.536 4.088 19.608 3.48 18.392 3C17.176 2.488 15.816 2.232 14.312 2.232C10.888 2.232 8.248 3.592 6.392 6.312C6.392 6.344 6.36 6.392 6.296 6.456C6.264 6.488 6.248 6.504 6.248 6.504C6.184 6.632 6.072 6.84 5.912 7.128L5.864 7.176C5.416 7.976 5.112 8.76 4.952 9.528C4.824 10.296 4.824 10.968 4.952 11.544C5.08 12.12 5.256 12.664 5.48 13.176C5.736 13.688 5.992 14.168 6.248 14.616C6.504 15.032 6.728 15.448 6.92 15.864C7.112 16.248 7.208 16.648 7.208 17.064C7.208 17.448 7.064 17.832 6.776 18.216C6.552 18.504 6.232 18.904 5.816 19.416C5.4 19.928 5.128 20.264 5 20.424C4.904 20.584 4.744 20.872 4.52 21.288C4.296 21.672 4.184 21.976 4.184 22.2C4.216 22.424 4.248 22.76 4.28 23.208C4.312 23.656 4.408 24.12 4.568 24.6C4.76 25.08 5 25.672 5.288 26.376C7.048 30.12 10.056 31.992 14.312 31.992C15.976 32.024 17.608 31.752 19.208 31.176C19.784 30.952 20.232 30.6 20.552 30.12C20.904 29.608 21.08 29.048 21.08 28.44V21.816C21.08 21.08 20.936 20.376 20.648 19.704C20.392 19.032 20.008 18.632 19.496 18.504C19.144 18.408 18.968 18.232 18.968 17.976C18.968 17.848 19.016 17.736 19.112 17.64C19.208 17.544 19.336 17.496 19.496 17.496H27.08ZM34.4544 21.912C34.4544 22.008 34.4544 22.104 34.4544 22.2V28.584C34.4544 30.664 34.8064 31.8 35.5104 31.992C35.8304 32.088 35.9904 32.248 35.9904 32.472C35.9904 32.632 35.9424 32.76 35.8464 32.856C35.7504 32.952 35.6384 33 35.5104 33H28.9824C28.8224 33 28.6944 32.952 28.5984 32.856C28.5024 32.76 28.4544 32.632 28.4544 32.472C28.4544 32.248 28.6304 32.088 28.9824 31.992C29.3664 31.896 29.6384 31.608 29.7984 31.128C29.9584 30.648 30.0384 29.816 30.0384 28.632V23.208C30.0384 22.792 30.1184 22.408 30.2784 22.056C30.4704 21.672 30.6464 21.368 30.8064 21.144C30.9984 20.92 31.2864 20.696 31.6704 20.472C32.0544 20.216 32.3424 20.04 32.5344 19.944C32.7264 19.848 33.0624 19.704 33.5424 19.512C34.0224 19.32 34.3264 19.192 34.4544 19.128C34.9664 18.936 35.4144 18.632 35.7984 18.216C35.9904 17.96 36.0864 17.72 36.0864 17.496C36.0864 17.272 36.0064 17.064 35.8464 16.872C35.6864 16.648 35.4944 16.456 35.2704 16.296C35.0784 16.104 34.8064 15.896 34.4544 15.672C34.4224 15.672 34.1824 15.544 33.7344 15.288C33.3184 15 33.0624 14.824 32.9664 14.76C32.9024 14.696 32.6784 14.536 32.2944 14.28C31.9424 13.992 31.7024 13.784 31.5744 13.656C31.4464 13.496 31.2544 13.272 30.9984 12.984C30.7424 12.696 30.5664 12.44 30.4704 12.216C30.3744 11.96 30.2784 11.672 30.1824 11.352C30.0864 11.032 30.0384 10.696 30.0384 10.344V5.304C30.0384 3.352 29.6544 2.232 28.8864 1.944C28.5344 1.816 28.3584 1.64 28.3584 1.416C28.3584 1.288 28.4064 1.176 28.5024 1.08C28.5984 0.983998 28.7264 0.935998 28.8864 0.935998H33.9264C34.1504 0.935998 34.3104 1.032 34.4064 1.224C34.4384 1.288 34.4544 1.352 34.4544 1.416V10.296C34.4544 10.456 34.4544 10.632 34.4544 10.824C34.4864 11.464 34.6144 12.12 34.8384 12.792C35.0944 13.464 35.3504 14.04 35.6064 14.52C35.8944 15 36.1504 15.464 36.3744 15.912C36.5984 16.36 36.7104 16.808 36.7104 17.256C36.7104 17.704 36.5504 18.12 36.2304 18.504C35.0784 20.04 34.4864 21.176 34.4544 21.912ZM49.6696 11.064C51.5256 11.064 53.2216 11.56 54.7576 12.552C56.2936 13.512 57.5096 14.824 58.4056 16.488C59.3016 18.152 59.7496 19.976 59.7496 21.96C59.7496 23.144 59.6056 24.296 59.3176 25.416C59.0296 26.504 58.5816 27.512 57.9736 28.44C57.3976 29.368 56.7096 30.168 55.9096 30.84C55.1096 31.512 54.1656 32.04 53.0776 32.424C52.0216 32.808 50.8856 33 49.6696 33C48.2296 33 46.8536 32.696 45.5416 32.088C44.2296 31.48 43.1256 30.616 42.2296 29.496C41.0456 28.024 40.2616 26.36 39.8776 24.504C39.7816 23.704 39.4776 23 38.9656 22.392C38.7416 22.104 38.5976 21.832 38.5336 21.576C38.4696 21.32 38.4696 21.096 38.5336 20.904C38.5976 20.712 38.6936 20.504 38.8216 20.28C38.9816 20.024 39.1416 19.8 39.3016 19.608C39.4936 19.384 39.6856 19.128 39.8776 18.84C40.0696 18.52 40.2296 18.216 40.3576 17.928C40.3576 17.928 40.3736 17.864 40.4056 17.736C41.1096 15.912 42.2136 14.392 43.7176 13.176C45.4776 11.768 47.4616 11.064 49.6696 11.064ZM49.7176 31.992C51.6056 31.992 53.0136 31.096 53.9416 29.304C54.8696 27.512 55.3336 25.096 55.3336 22.056C55.3336 19.208 54.7896 16.84 53.7016 14.952C52.6456 13.032 51.3176 12.072 49.7176 12.072C48.6616 12.072 47.6856 12.52 46.7896 13.416C45.9256 14.312 45.2536 15.512 44.7736 17.016C44.7736 17.048 44.7736 17.064 44.7736 17.064C44.7736 17.064 44.7736 17.08 44.7736 17.112C44.7416 17.176 44.7096 17.256 44.6776 17.352C44.4536 17.96 44.0376 18.472 43.4296 18.888C42.8216 19.304 42.1016 19.672 41.2696 19.992C40.4696 20.28 39.9576 20.504 39.7336 20.664C39.0936 21.048 38.9976 21.528 39.4456 22.104C39.5096 22.2 39.5736 22.28 39.6376 22.344C39.9256 22.6 40.4536 22.888 41.2216 23.208C41.9896 23.528 42.6616 23.88 43.2376 24.264C43.8456 24.648 44.1976 25.112 44.2936 25.656C44.3256 25.784 44.3416 25.896 44.3416 25.992C45.0456 29.992 46.8376 31.992 49.7176 31.992ZM94.5088 11.976C94.8608 11.976 95.0368 12.152 95.0368 12.504C95.0048 12.824 94.8288 12.984 94.5088 12.984C94.2528 13.016 94.0128 13.08 93.7888 13.176C93.5648 13.272 93.3248 13.416 93.0688 13.608C92.8448 13.8 92.6208 14.056 92.3968 14.376C92.2048 14.696 92.0128 15.096 91.8208 15.576L86.7808 27.72L84.8127 32.856C84.7808 32.952 84.7168 33 84.6208 33C84.5568 33 84.5088 32.968 84.4768 32.904L77.3248 16.392L72.6688 27.576V27.624L70.7488 32.76C70.7168 32.856 70.6528 32.904 70.5568 32.904C70.4608 32.904 70.4128 32.856 70.4128 32.76C70.2208 32.184 70.1088 31.816 70.0768 31.656C69.8528 31.112 69.6608 30.616 69.5008 30.168C69.3728 29.688 69.2448 29.272 69.1168 28.92C69.0208 28.536 68.9568 28.184 68.9248 27.864C68.8928 27.544 68.8608 27.272 68.8288 27.048C68.8288 26.824 68.8608 26.584 68.9248 26.328C69.0208 26.072 69.0848 25.88 69.1168 25.752C69.1808 25.592 69.2768 25.4 69.4048 25.176C69.5648 24.952 69.6928 24.776 69.7888 24.648C69.8848 24.52 70.0448 24.328 70.2688 24.072C70.4928 23.784 70.6688 23.56 70.7968 23.4C70.9248 23.208 71.0208 23.064 71.0848 22.968C71.1808 22.84 71.2448 22.728 71.2768 22.632C71.3408 22.536 71.3888 22.456 71.4208 22.392C71.4528 22.328 71.4688 22.264 71.4688 22.2C71.4688 22.136 71.4368 22.088 71.3728 22.056C71.3408 22.024 71.3088 21.992 71.2768 21.96C71.2448 21.928 71.1648 21.912 71.0368 21.912C70.9408 21.88 70.8448 21.864 70.7488 21.864C70.6848 21.832 70.5728 21.816 70.4128 21.816C70.2528 21.784 70.1248 21.752 70.0288 21.72C67.0528 21.24 64.6848 19.256 62.9248 15.768C62.9248 15.736 62.9088 15.672 62.8768 15.576L62.7808 15.48C62.6208 15.128 62.4448 14.824 62.2528 14.568C62.0928 14.312 61.9328 14.104 61.7728 13.944C61.6128 13.752 61.4688 13.608 61.3408 13.512C61.2128 13.384 61.0688 13.304 60.9088 13.272C60.7808 13.208 60.6688 13.16 60.5728 13.128C60.5088 13.096 60.4128 13.064 60.2848 13.032C60.1568 13 60.0768 12.984 60.0448 12.984C59.6928 12.888 59.5168 12.728 59.5168 12.504C59.5168 12.344 59.5648 12.216 59.6608 12.12C59.7568 12.024 59.8848 11.976 60.0448 11.976H67.0048C67.1328 11.976 67.2448 12.024 67.3408 12.12C67.4688 12.216 67.5328 12.344 67.5328 12.504C67.5328 12.568 67.5008 12.632 67.4368 12.696C67.4048 12.76 67.3248 12.824 67.1968 12.888C67.1008 12.92 67.0368 12.952 67.0048 12.984C66.4928 13.368 66.5248 14.104 67.1008 15.192C67.7728 16.504 68.4608 17.624 69.1648 18.552C69.8688 19.448 70.4288 20.056 70.8448 20.376C71.2608 20.696 71.5968 21 71.8528 21.288C72.1408 21.544 72.2528 21.8 72.1888 22.056C72.1568 22.312 71.9328 22.712 71.5168 23.256C71.3248 23.544 71.1968 23.864 71.1328 24.216C71.0368 24.888 71.3408 25.736 72.0448 26.76L72.1888 26.472L76.7968 15.144L77.7568 12.84C77.9488 12.296 78.3328 12.024 78.9088 12.024C79.4848 11.992 79.9008 12.248 80.1568 12.792L86.2528 26.568L90.7648 15.528C90.7968 15.496 90.8128 15.48 90.8128 15.48C91.0368 14.84 91.1488 14.344 91.1488 13.992C91.1808 13.64 91.1328 13.416 91.0048 13.32C90.9088 13.224 90.7328 13.112 90.4768 12.984C90.1248 12.856 89.9488 12.696 89.9488 12.504C89.9488 12.344 89.9968 12.216 90.0928 12.12C90.1888 12.024 90.3168 11.976 90.4768 11.976H94.5088ZM114.745 31.992C115.065 32.088 115.241 32.248 115.273 32.472C115.273 32.632 115.209 32.76 115.081 32.856C114.985 32.952 114.873 33 114.745 33H108.745C108.553 33 108.409 32.904 108.313 32.712C108.281 32.648 108.265 32.568 108.265 32.472C108.265 32.344 108.425 32.184 108.745 31.992C109.097 31.864 109.257 31.608 109.225 31.224C109.257 31.128 109.257 30.616 109.225 29.688V29.64C109.225 29.64 109.225 29.624 109.225 29.592V29.448C108.297 30.792 107.033 31.752 105.433 32.328C103.865 32.904 102.329 33.08 100.825 32.856C99.3529 32.6 98.0729 31.928 96.9849 30.84C95.8969 29.752 95.3529 28.36 95.3529 26.664C95.3529 25.928 95.4969 25.256 95.7849 24.648C96.0729 24.008 96.4729 23.48 96.9849 23.064C97.5289 22.616 98.1209 22.216 98.7609 21.864C99.4329 21.512 100.153 21.24 100.921 21.048C101.721 20.824 102.473 20.648 103.177 20.52C103.913 20.36 104.665 20.248 105.433 20.184C106.233 20.088 106.889 20.024 107.401 19.992C107.913 19.96 108.425 19.944 108.937 19.944C109.097 19.4 109.193 18.84 109.225 18.264V16.968C109.289 15.784 108.969 14.712 108.265 13.752C107.465 12.728 106.185 12.216 104.425 12.216C103.977 12.216 103.577 12.264 103.225 12.36C102.905 12.424 102.649 12.552 102.457 12.744C102.297 12.904 102.153 13.096 102.025 13.32C101.929 13.544 101.865 13.784 101.833 14.04C101.833 14.296 101.817 14.568 101.785 14.856C101.785 15.112 101.785 15.384 101.785 15.672C101.785 16.376 101.545 16.968 101.065 17.448C100.585 17.928 99.9929 18.168 99.2889 18.168C98.6169 18.168 98.0409 17.928 97.5609 17.448C97.0809 16.936 96.8409 16.344 96.8409 15.672C96.8409 15.608 96.8409 15.528 96.8409 15.432C96.8729 15.368 96.8889 15.288 96.8889 15.192C96.9209 15.096 96.9529 15 96.9849 14.904C96.9849 14.84 97.0009 14.776 97.0329 14.712C97.4169 13.784 98.2169 12.968 99.4329 12.264C100.649 11.56 102.329 11.208 104.473 11.208C106.137 11.208 107.593 11.416 108.841 11.832C110.089 12.248 111.001 12.712 111.577 13.224C112.153 13.736 112.617 14.344 112.969 15.048C113.321 15.752 113.513 16.264 113.545 16.584C113.609 16.904 113.641 17.192 113.641 17.448V17.736C113.641 18.088 113.593 18.424 113.497 18.744C113.401 19.064 113.305 19.352 113.209 19.608C113.113 19.832 112.937 20.088 112.681 20.376C112.425 20.664 112.233 20.888 112.105 21.048C111.977 21.176 111.721 21.384 111.337 21.672C110.985 21.928 110.761 22.088 110.665 22.152C110.601 22.216 110.345 22.392 109.897 22.68C109.481 22.936 109.257 23.064 109.225 23.064C108.937 23.256 108.697 23.416 108.505 23.544C108.345 23.672 108.169 23.832 107.977 24.024C107.817 24.184 107.705 24.344 107.641 24.504C107.609 24.664 107.593 24.84 107.593 25.032C107.625 25.224 107.721 25.416 107.881 25.608C108.265 26.024 108.713 26.328 109.225 26.52C109.257 26.52 109.545 26.648 110.089 26.904C110.665 27.128 111.017 27.288 111.145 27.384C111.305 27.448 111.593 27.608 112.009 27.864C112.457 28.12 112.761 28.36 112.921 28.584C113.081 28.776 113.241 29.048 113.401 29.4C113.561 29.72 113.641 30.088 113.641 30.504C113.641 31.24 114.009 31.736 114.745 31.992ZM105.193 31.176C106.569 30.952 107.849 30.008 109.033 28.344C108.585 27.48 108.057 26.664 107.449 25.896C107.161 25.544 107.001 25.144 106.969 24.696C106.969 24.248 107.033 23.88 107.161 23.592C107.321 23.272 107.561 22.808 107.881 22.2C108.201 21.592 108.441 21.128 108.601 20.808C107.449 20.904 106.377 21.096 105.385 21.384C104.393 21.64 103.449 21.992 102.553 22.44C101.689 22.888 101.001 23.496 100.489 24.264C100.009 25 99.7689 25.848 99.7689 26.808C99.7689 27.608 99.9129 28.312 100.201 28.92C100.489 29.528 100.841 29.976 101.257 30.264C101.705 30.552 102.185 30.792 102.697 30.984C103.209 31.144 103.673 31.224 104.089 31.224C104.537 31.192 104.905 31.176 105.193 31.176ZM135.372 12.12C135.5 12.12 135.612 12.168 135.708 12.264C135.804 12.36 135.852 12.488 135.852 12.648C135.852 12.872 135.692 13.032 135.372 13.128C135.084 13.192 134.844 13.272 134.652 13.368C134.46 13.464 134.236 13.608 133.98 13.8C133.756 13.96 133.532 14.2 133.308 14.52C133.084 14.84 132.86 15.224 132.636 15.672C132.636 15.672 132.636 15.688 132.636 15.72L127.548 27.96L127.452 28.2L125.532 32.856C125.5 32.952 125.42 33 125.292 33C125.164 33 125.084 32.952 125.052 32.856C124.988 32.664 124.908 32.472 124.812 32.28C124.428 31.288 124.108 30.296 123.852 29.304C123.724 28.856 123.628 28.456 123.564 28.104C123.532 27.752 123.532 27.416 123.564 27.096C123.628 26.776 123.676 26.52 123.708 26.328C123.772 26.136 123.884 25.912 124.044 25.656C124.204 25.368 124.332 25.16 124.428 25.032C124.524 24.904 124.7 24.68 124.956 24.36C125.244 24.04 125.436 23.816 125.532 23.688C125.724 23.464 125.884 23.256 126.012 23.064C126.076 22.936 126.14 22.84 126.204 22.776C126.268 22.68 126.316 22.6 126.348 22.536C126.38 22.44 126.38 22.376 126.348 22.344C126.348 22.28 126.332 22.232 126.3 22.2C126.3 22.136 126.268 22.104 126.204 22.104C126.14 22.072 126.076 22.04 126.012 22.008C125.98 21.976 125.9 21.96 125.772 21.96C125.676 21.928 125.58 21.912 125.484 21.912C125.388 21.88 125.26 21.864 125.1 21.864C124.972 21.832 124.86 21.8 124.764 21.768C121.788 21.256 119.436 19.16 117.708 15.48C117.676 15.416 117.66 15.368 117.66 15.336C117.34 14.728 117.036 14.264 116.748 13.944C116.46 13.592 116.236 13.384 116.076 13.32C115.948 13.256 115.74 13.192 115.452 13.128C115.1 13.064 114.924 12.904 114.924 12.648C114.924 12.488 114.972 12.36 115.068 12.264C115.164 12.168 115.292 12.12 115.452 12.12H121.98C122.108 12.12 122.22 12.168 122.316 12.264C122.412 12.36 122.46 12.488 122.46 12.648C122.46 12.872 122.3 13.032 121.98 13.128C121.436 13.288 121.484 14.12 122.124 15.624L122.988 17.688C123.468 18.552 123.98 19.272 124.524 19.848C125.068 20.424 125.516 20.824 125.868 21.048C126.22 21.24 126.508 21.432 126.732 21.624C126.988 21.816 127.084 22.04 127.02 22.296C126.988 22.52 126.796 22.872 126.444 23.352C126.124 23.8 125.98 24.28 126.012 24.792C126.14 25.624 126.46 26.376 126.972 27.048V27L131.58 15.672L131.628 15.624C131.756 15.24 131.852 14.904 131.916 14.616C131.98 14.328 131.996 14.104 131.964 13.944C131.964 13.784 131.916 13.64 131.82 13.512C131.756 13.384 131.676 13.304 131.58 13.272C131.516 13.24 131.42 13.192 131.292 13.128C130.94 13 130.764 12.84 130.764 12.648C130.764 12.552 130.78 12.472 130.812 12.408C130.876 12.312 130.94 12.248 131.004 12.216C131.1 12.152 131.196 12.12 131.292 12.12H135.372ZM154.81 20.424C154.842 20.68 154.762 20.92 154.57 21.144C154.41 21.336 154.186 21.416 153.898 21.384H142.138C141.882 21.384 141.642 21.288 141.418 21.096C141.226 20.904 141.13 20.664 141.13 20.376H150.442C150.25 17.88 149.674 15.88 148.714 14.376C147.753 12.84 146.586 12.072 145.21 12.072C143.802 12.072 142.602 12.888 141.61 14.52C141.258 15.064 140.986 15.64 140.794 16.248C140.794 16.248 140.778 16.264 140.746 16.296C140.746 16.328 140.746 16.344 140.746 16.344C140.49 16.984 140.314 17.64 140.218 18.312C140.122 18.984 140.122 19.624 140.218 20.232C140.346 20.808 140.538 21.272 140.794 21.624C141.05 21.976 141.306 22.312 141.562 22.632C141.818 22.952 142.026 23.24 142.186 23.496C142.346 23.72 142.394 23.976 142.33 24.264C142.266 24.52 142.042 24.792 141.658 25.08C141.242 25.4 140.954 25.816 140.794 26.328C140.666 26.84 140.682 27.352 140.842 27.864V27.912C141.098 28.712 141.498 29.432 142.042 30.072L142.09 30.12C142.41 30.568 142.81 30.952 143.29 31.272C143.322 31.304 143.338 31.32 143.338 31.32C143.946 31.768 144.634 31.992 145.402 31.992C149.178 31.992 151.722 30.52 153.034 27.576C153.098 27.416 153.21 27.336 153.37 27.336C153.562 27.304 153.706 27.368 153.802 27.528C153.898 27.656 153.914 27.784 153.85 27.912C152.314 31.304 149.482 33 145.354 33C143.914 33 142.57 32.68 141.322 32.04H141.273C140.25 31.496 139.338 30.808 138.538 29.976C138.09 29.496 137.674 28.968 137.29 28.392C136.842 27.624 136.842 27.016 137.29 26.568C137.77 26.088 138.506 25.704 139.498 25.416C140.49 25.128 141.066 24.92 141.226 24.792C142.058 24.184 141.61 23.512 139.882 22.776C139.786 22.776 139.658 22.744 139.498 22.68C138.858 22.392 138.362 22.168 138.01 22.008C137.658 21.816 137.242 21.512 136.762 21.096C136.314 20.648 136.058 20.184 135.994 19.704C135.93 19.192 136.026 18.52 136.282 17.688C136.57 16.856 137.098 15.912 137.866 14.856C138.442 14.088 139.114 13.432 139.882 12.888C140.682 12.312 141.53 11.88 142.426 11.592C143.322 11.272 144.25 11.096 145.21 11.064C147.61 11.064 149.706 11.96 151.498 13.752C153.322 15.544 154.426 17.752 154.81 20.376V20.424Z" fill="black" />
                        </svg>

                    </div>

                    <div className=' hidden md:block'>
                        <div className='flex justify-between items-center gap-6 text-[18px] leading-[22px] text-[#000000]'>
                            <div>
                                <Link href={`/`}>About</Link>
                            </div>
                            <div>
                                <Link href={`/`}>Product</Link>
                            </div>
                            <div>
                                <Link href={`/`}>Contact</Link>
                            </div>
                            <div>
                                <Link href={`/`}>Skincare Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end items-center gap-4'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.513 0.102999V1.525H2.321V5.809H7.334V7.177H2.321V11.578H8.513V13H0.566V0.102999H8.513ZM11.925 0.102999C12.081 0.102999 12.195 0.123999 12.267 0.165999C12.345 0.201999 12.432 0.279999 12.528 0.399999L19.998 10.12C19.98 9.964 19.968 9.814 19.962 9.67C19.956 9.52 19.953 9.376 19.953 9.238V0.102999H21.483V13H20.601C20.463 13 20.346 12.976 20.25 12.928C20.16 12.88 20.07 12.799 19.98 12.685L12.519 2.974C12.531 3.124 12.54 3.271 12.546 3.415C12.552 3.559 12.555 3.691 12.555 3.811V13H11.025V0.102999H11.925Z" fill="black" />
                        </svg>


                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L8 8L14 2" stroke="#525252" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;


