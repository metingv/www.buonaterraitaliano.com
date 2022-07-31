import '../styles/Component.scss';
import { useEffect, useState } from 'react';


function Footer() {


    return (
        <>
            <div className='Footer'>
                <div className='FooterTop'>
                    <figure>
                        <img src={"../imgs/loqo.png"} alt="buonaterraitaliano" />
                    </figure>
                    <figure>
                        <h1>OPENING HOURS</h1>
                        <div><span> Lunch </span> 12pm – 3:00pm (Mon – Fri)</div>
                        <div><span> Dinner </span>6:30pm – 10:30pm (Mon – Sat)</div>
                        <div><span> Sunday </span>Closed Last Order 9:15pm</div>
                    </figure>
                    <figure>
                        <h1>CONTACT INFORMATION</h1>
                        <div><span> Address </span>29 Scotts Road, Singapore 228224</div>
                        <div><span> Phone</span>(+65) 6733 0209 / (+65) 9456 3147</div>
                    </figure>
                    <figure>
                        <h1>.</h1>
                        <div><span> Fax </span>(+65) 6733 6077</div>
                        <div><span> Email </span>buonaterraitaliano@chateautcc.com</div>
                    </figure>

                </div>
                <div className="FooterBottom">
                Copyright © 2022 Buona Terra. All rights reserved.
                <div className="socialnav">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
                </div>
            </div>



        </>


    );
}

export default Footer;