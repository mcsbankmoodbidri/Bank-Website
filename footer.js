const footerHTML = `
    <style>
        /* ----------------------------------
           TRADITIONAL STATIC FOOTER
        ----------------------------------- */
        .main-footer {
            background-color: #2c3e50;
            padding: 50px 40px; 
            width: 100%;
            /* This ensures it pushes to the bottom if the page content is short */
            margin-top: auto; 
        }

        .footer-content {
            width: 100%; 
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between; 
            align-items: center; 
            gap: 40px;
            flex-wrap: wrap;
        }

        .footer-map {
            flex: 1;
            max-width: 500px; 
            height: 200px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .footer-map iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        .footer-details {
            display: flex;
            flex-direction: column;
            align-items: flex-end; 
            gap: 20px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 16px;
            font-weight: 500;
            color: #95a5a6;
        }

        .contact-item a {
            color: inherit;
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .contact-item a:hover {
            color: #ffffff;
        }

        /* Mobile Adjustments */
        @media (max-width: 850px) {
            .footer-content {
                flex-direction: column-reverse;
                align-items: center;
                gap: 35px;
            }
            .footer-details {
                align-items: center;
                text-align: center;
            }
            .footer-map {
                width: 100%;
                max-width: 100%;
            }
            .main-footer {
                padding: 40px 20px;
            }
        }
    </style>

    <footer class="main-footer">
        <div class="footer-content">
            
            <div class="footer-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419.16749662593645!2d74.99852295887814!3d13.070651317507846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4aae94bf71ba9%3A0xe95449d7561c8bec!2sKalpavruksha%20Sababhavana%2C%20Moodbidri!5e0!3m2!1sen!2sin!4v1780314739999!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="footer-details">
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <a href="https://maps.app.goo.gl/R1BvtqsBb7fQDagS6" target="_blank" rel="noopener noreferrer">Your Address Here</a>
                </div>
                
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    support@financialhub.demo
                </div>
                
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    +1 (800) 555-0199
                </div>

                <div class="contact-item">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <a href="https://forms.gle/4pJfLvge9fHzbMFd6" target="_blank" rel="noopener noreferrer">Customer Feedback</a>
                </div>
            </div>

        </div>
    </footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);