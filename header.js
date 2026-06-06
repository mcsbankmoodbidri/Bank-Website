const headerHTML = `
    <style>
        /* ----------------------------------
           UNIFIED HEADER STYLES
        ----------------------------------- */
        .main-header {
            background-color: #ffffff;
            padding: 20px 40px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        .header-left-group {
            display: flex;
            align-items: center;
            gap: 20px; 
        }

        .header-logo {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s ease;
            flex-shrink: 0; 
        }

        .header-logo:hover { 
            transform: scale(1.05); 
        }

        .header-titles {
            display: flex;
            flex-direction: column;
            align-items: flex-start; 
            gap: 4px;
        }

        .main-header h1 {
            color: #2c3e50;
            font-size: 22px;
            font-weight: 700;
            text-align: left;
            letter-spacing: 0.5px;
            margin: 0;
        }

        .kannada-title {
            color: #7f8c8d;
            font-size: 12px;
            font-weight: 500;
            text-align: left;
            margin: 0;
        }

        /* ----------------------------------
           RIGHT SIDE ACTIONS (Awards)
        ----------------------------------- */
        .header-actions {
            display: flex;
            align-items: center;
            gap: 25px;
        }

        /* Trophy Image Icon */
        .trophy-icon {
            width: 50px;
            height: 50px;
            cursor: pointer;
            object-fit: contain;
            transition: transform 0.2s ease, filter 0.2s ease;
        }

        .trophy-icon:hover {
            transform: scale(1.1) rotate(3deg);
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));
        }

        /* Responsive Design */
        @media (max-width: 850px) {
            .main-header h1 { font-size: 18px; }
            .kannada-title { font-size: 14px; }
            .header-left-group { gap: 15px; }
            .header-actions { gap: 18px; }
        }

        @media (max-width: 600px) {
            .main-header { padding: 15px 15px; }
            .main-header h1 { font-size: 14px; }
            .kannada-title { font-size: 11px; }
            .header-logo { width: 45px; height: 45px; }
            .header-left-group { gap: 12px; }
            .header-actions { gap: 15px; }
            
            .trophy-icon { width: 40px; height: 40px; }
        }
    </style>

    <header class="main-header">
        <div class="header-left-group">
            <img src="images/logo.webp" alt="Bank Logo" class="header-logo" onclick="window.location.href='index.html'">
            <div class="header-titles">
                <h1>Moodbidri Co-operative Service Bank Ltd</h1>
                <h2 class="kannada-title"><b>ಮೂಡುಬಿದಿರೆ ಕೋ-ಆಪರೇಟಿವ್ ಸರ್ವೀಸ್ ಬ್ಯಾಂಕ್ ಲಿ.</b></h2>
            </div>
        </div>

        <div class="header-actions">
            <img src="images/trophy.png" alt="Awards Trophy" class="trophy-icon" onclick="window.location.href='awards.html'" title="View Awards">
        </div>
    </header>
`;

document.body.insertAdjacentHTML('afterbegin', headerHTML);