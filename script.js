/* Custom utility for advanced glassmorphism */
.glass-panel {
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.glass-panel:hover {
    border-color: rgba(56, 189, 248, 0.3);
    box-shadow: 0 10px 40px rgba(56, 189, 248, 0.1);
}

/* Navbar scroll effect */
.nav-scrolled {
    background: rgba(5, 11, 20, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #050B14;
}

::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #38bdf8;
}