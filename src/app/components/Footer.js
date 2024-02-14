const Footer = () => {
    return (
        <footer class="bg-footerbg dark:bg-gray-900 items-center w-full">
            <div class="mx-full w-full max-w-screen-xl items-center mx-auto">
                <div class="grid grid-cols-4 gap-2 px-7 py-6 lg:py-8 md:grid-cols-5 justify-center ">
                    <div>
                        <h2 class="mb-6 text-l text-gray-900 dark:text-white font-JioTypeBlack" >Our Business</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-JioTypeMedium">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">Loans</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Insurance Broking</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Payments Bank</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Payments Solutions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-l font-semibold text-gray-900 dark:text-white font-JioTypeBlack">Our Company</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-JioTypeMedium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">About Us</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Board of Directors</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Board Committees</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Management</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-l font-semibold text-gray-900 dark:text-white font-JioTypeBlack">Investor Relations</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-JioTypeMedium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Financials</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Policy Documents</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Investor Contacts</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Grievance Mechanism</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Disclosure Under Regulation 46 of SEBI(LODR) Regulations,2015</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Downloads</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Corporate Announcements</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Notices</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Shareholders Information</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-l font-semibold text-gray-900 dark:text-white font-JioTypeBlack">Legal</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-JioTypeMedium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Terms & Conditions</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-l font-semibold text-gray-900 dark:text-white font-JioTypeBlack">Quick Links
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-JioTypeMedium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">SEBI Circular on Online Dispute Resolution</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Link to SMART ODR</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center font-JioTypeBold md:justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="">Jio Financial Services Ltd.</a>(Formerly Reliance Strategic Investments Ltd.)
                    </span>

                </div>
            </div>
        </footer>
    )
};

export default Footer;