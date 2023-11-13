"use client"
import React from 'react';

const Navigation = () => {
    return (
        <div>
            <div className="top-navigation-area bg-black text-white p-2">
                <div className="container mx-auto px-24">
                    <div className="top-nev-content flex justify-between">
                        <div className="shipping flex">
                            <svg _ngcontent-ng-c3631614527="" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" d="M14.6364 1H1V12.8182H14.6364V1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M14.6364 5.54545H18.2727L21 8.27273V12.8182H14.6364V5.54545Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M5.0909 17.3636C6.3461 17.3636 7.36363 16.3461 7.36363 15.0909C7.36363 13.8357 6.3461 12.8182 5.0909 12.8182C3.83571 12.8182 2.81818 13.8357 2.81818 15.0909C2.81818 16.3461 3.83571 17.3636 5.0909 17.3636Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M16.9091 17.3636C18.1643 17.3636 19.1818 16.3461 19.1818 15.0909C19.1818 13.8357 18.1643 12.8182 16.9091 12.8182C15.6539 12.8182 14.6364 13.8357 14.6364 15.0909C14.6364 16.3461 15.6539 17.3636 16.9091 17.3636Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <small className='ml-5'>FREE Express Shipping On Orders $570+</small>
                        </div>
                        <small className="setting-nav-area text-white bg-black">
                            <select id="language" className='bg-black outline-none'>
                                <option value="english">English</option>
                                <option value="spanish">Spanish</option>
                                <option value="russian">Russian</option>
                            </select>
                            <select id="currency" className='bg-black outline-none'>
                                <option value="usd">USD</option>
                                <option value="eur">EUR</option>
                                <option value="chf">CHF</option>
                                <option value="gbp">GBP</option>
                            </select>
                            <select id="profile" className='bg-black outline-none'>
                                <option value="setting">Setting</option>
                                <option value="myprofile">My Profile</option>
                                <option value="wishlist">Wishlist</option>
                                <option value="cart">Cart</option>
                                <option value="logout">Logout</option>
                            </select>
                        </small>
                    </div>
                </div>
            </div>
            {/* bottom navigation search area */}
            <div className="navigation-serach-area">
                <div className="container mx-auto px-24">
                    <div className="navigation-area flex justify-between items-center p-5">
                        <div className="logo">
                            <p className="font-bold text-2xl">EasyBuy</p>
                        </div>
                        <div className="search-area w-2/4 flex">
                            <input type="text" placeholder='Search for Products...' className='h-[46px] p-2 w-5/6 border-2 outline-none border-blue-600' />
                            <div className="search-icon bg-sky-600 w-[60px] h-[46px] leading-[46px] flex items-center justify-center cursor-pointer text-white">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M19 19L14.65 14.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                        </div>
                        <div className="tp-header-right-area flex space-x-6">
                            <span><svg _ngcontent-ng-c3631614527="" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle _ngcontent-ng-c3631614527="" cx="8.57894" cy="5.77803" r="4.77803" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M1.00002 17.2014C0.998732 16.8655 1.07385 16.5337 1.2197 16.2311C1.67736 15.3158 2.96798 14.8307 4.03892 14.611C4.81128 14.4462 5.59431 14.336 6.38217 14.2815C7.84084 14.1533 9.30793 14.1533 10.7666 14.2815C11.5544 14.3367 12.3374 14.4468 13.1099 14.611C14.1808 14.8307 15.4714 15.27 15.9291 16.2311C16.2224 16.8479 16.2224 17.564 15.9291 18.1808C15.4714 19.1419 14.1808 19.5812 13.1099 19.7918C12.3384 19.9634 11.5551 20.0766 10.7666 20.1304C9.57937 20.2311 8.38659 20.2494 7.19681 20.1854C6.92221 20.1854 6.65677 20.1854 6.38217 20.1304C5.59663 20.0773 4.81632 19.9641 4.04807 19.7918C2.96798 19.5812 1.68652 19.1419 1.2197 18.1808C1.0746 17.8747 0.999552 17.5401 1.00002 17.2014Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <span><svg _ngcontent-ng-c3631614527="" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" d="M14.8396 17.3319V3.71411" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M19.1556 13L15.0778 17.0967L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M4.91115 1.00056V14.6183" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M0.833496 5.09667L4.91127 1L8.98905 5.09667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <span><svg _ngcontent-ng-c3631614527="" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <span><svg _ngcontent-ng-c3631614527="" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            {/* bottom -navbar */}
            <div className="bottom-navbar">
                <div className="container mx-auto px-24">
                    <div className="bottom-nev-content flex justify-between items-center">
                        <div className="right-bt-nev flex items-center justify-center space-x-4 bg-sky-600 text-white p-4 w-1/4">
                            <span><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2832150331="" fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H1Z" fill="currentColor"></path></svg></span>
                            {/* multilabel-category-button-start */}
                            <p> All Category</p>


                            {/* multilabel-category-button-end */}
                        </div>
                        <div className="middle-bt-nav">
                            <ul className='flex space-x-7 cursor-pointer'>
                                <li>Home</li>
                                <li>News</li>
                                <li>Blog</li>
                                <li>About</li>
                                <li>Shop</li>
                            </ul>
                        </div>
                        <div className="right-bt-nav flex items-center space-x-5">
                            <span>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3631614527="" fill-rule="evenodd" clip-rule="evenodd" d="M1.96977 3.24859C2.26945 2.75144 3.92158 0.946726 5.09889 1.00121C5.45111 1.03137 5.76246 1.24346 6.01544 1.49057H6.01641C6.59631 2.05874 8.26011 4.203 8.35352 4.65442C8.58411 5.76158 7.26378 6.39979 7.66756 7.5157C8.69698 10.0345 10.4707 11.8081 12.9908 12.8365C14.1058 13.2412 14.7441 11.9219 15.8513 12.1515C16.3028 12.2459 18.4482 13.9086 19.0155 14.4894V14.4894C19.2616 14.7414 19.4757 15.0537 19.5049 15.4059C19.5487 16.6463 17.6319 18.3207 17.2583 18.5347C16.3767 19.1661 15.2267 19.1544 13.8246 18.5026C9.91224 16.8749 3.65985 10.7408 2.00188 6.68096C1.3675 5.2868 1.32469 4.12906 1.96977 3.24859Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M12.936 1.23685C16.4432 1.62622 19.2124 4.39253 19.6065 7.89874" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3631614527="" d="M12.936 4.59337C14.6129 4.92021 15.9231 6.23042 16.2499 7.90726" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </span>
                            <div className="right-bt-content">
                                <small className='text-gray-500'>Hotline</small>
                                <p className='font-bold'>+(589) 859 102 46</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;