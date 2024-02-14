const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 tems-stretch">
            <div className="px-auto  mx-full w-full max-w-6xl items-center">
                <div className="px-auto grid grid-cols-4 gap-2 px-2 py-6 lg:py-8 md:grid-cols-5 justify-center">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-JioType-Bold" >Our Business</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Loans</a>
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
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Company</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">About Us</a>
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
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Investor Relations</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Financials</a>
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
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms & Conditions</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
                <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="">Jio Financial Services Ltd.</a>(Formerly Reliance Strategic Investments Ltd.)
                    </span>

                </div>
            </div>
        </footer>
    )
};

export default Footer;