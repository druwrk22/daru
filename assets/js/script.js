$(document).ready(function() {
    const projects = [
        {
            id: 1,
            title: "TMS (Transportation Management System)",
            company: "PT Prakarsa Alam Segar (WINGS GROUP)",
            tech: ["Bootstrap", "jQuery", "Laravel", "VueJS", "Angular", "MySQL", "Firebase"],
            type: "Web Based",
            notif: "Telegram",
            slides: [
                { label: "Dashboard Overview", desc: "Realtime monitoring control room", bg: "slide-bg-1", icon: "📊" },
                { label: "Custom Maps Tracking", desc: "Live GPS tracking for all trucks", bg: "slide-bg-2", icon: "🗺️" },
                { label: "SAP Data Upload", desc: "Import data from SAP system", bg: "slide-bg-3", icon: "📤" },
                { label: "Telegram Notification", desc: "Auto alert when trouble occurs", bg: "slide-bg-4", icon: "📱" }
            ],
            impact: [
                "Easily track vehicle (truck) positions using custom maps",
                "Reduce paper usage by 80% for transactions",
                "Reduce the use of walkie-talkies for communication",
                "Accelerate analysis of material delivery trends",
                "Automatic telegram notification when trouble occurs"
            ],
            features: [
                "Upload data from SAP to system (Just upload, no modified column excel)",
                "Maps custom realtime",
                "Maintenance truck downtime",
                "Analyst data trend",
                "All step is notified to telegram group",
                "Ordering material or sending material to department",
                "Monitoring transaction for control room (Adm. Warehouse)",
                "Report data by dashboard and data excel (export)"
            ]
        },
        {
            id: 2,
            title: "Help Dev (Ticket Management)",
            company: "PT Prakarsa Alam Segar (WINGS GROUP)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            notif: "Telegram",
            slides: [
                { label: "Ticket Dashboard", desc: "Overview all open & closed tickets", bg: "slide-bg-1", icon: "🎫" },
                { label: "Task Assignment", desc: "Supervisor schedule tasks for worker", bg: "slide-bg-2", icon: "📋" },
                { label: "Performance Tracking", desc: "Measure developer productivity", bg: "slide-bg-5", icon: "📈" }
            ],
            impact: [
                "Easily assign task lists to workers",
                "Developer performance assessments are more efficient and measurable",
                "Developers can easily prioritize tasks",
                "Supervisors can more easily schedule projects for each worker",
                "Lead times between task acceptance and execution are more effective"
            ],
            features: [
                "Easily to create ticket (req feature, report bug)",
                "User & worker scheduled meeting",
                "Supervisor schedule task for worker",
                "Dashboard for data trend",
                "Tracking ticket for transparency transaction"
            ]
        },
        {
            id: 3,
            title: "Silo Management System",
            company: "PT Prakarsa Alam Segar (Dept EXP)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            api: "Intellitrac",
            slides: [
                { label: "Silo Dashboard", desc: "Live visual status of flour tanks", bg: "slide-bg-3", icon: "🏭" },
                { label: "Truck Tracking", desc: "High-precision delivery tracking", bg: "slide-bg-1", icon: "🚛" },
                { label: "QR Code Scanner", desc: "Mobile app for drivers & operators", bg: "slide-bg-4", icon: "📱" }
            ],
            impact: [
                "Optimizes the 24-hour flour retrieval process, ensuring maximum utilization of resources",
                "Eliminates communication silos by providing a centralized monitoring platform",
                "Enables immediate response to delays or issues through live data tracking"
            ],
            features: [
                "Live visual dashboard displaying the status of flour tanks",
                "High-precision tracking of delivery trucks to monitor transit times",
                "Easy-to-use mobile application for drivers and operators to update status via QR code scanning"
            ]
        },
        {
            id: 4,
            title: "Checklist SDP",
            company: "PT Prakarsa Alam Segar (Dept Engineering)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            special: "IndexedDB",
            notif: "Gmail",
            slides: [
                { label: "Machine Checklist", desc: "Identify faulty machines & overheating", bg: "slide-bg-4", icon: "🔧" },
                { label: "Offline Mode", desc: "Full functionality without internet", bg: "slide-bg-2", icon: "📵" },
                { label: "Scheduled Tasks", desc: "Automated reminder & tracking", bg: "slide-bg-5", icon: "⏰" }
            ],
            impact: [
                "Early detection of overheating components prevents unexpected machine failures",
                "The automated scheduling system ensures that preventive maintenance is performed on time",
                "High system availability allows field teams to work efficiently in any environment"
            ],
            features: [
                "Specialized checklist module to identify faulty machines and overheating components",
                "An automated reminder and tracking system that assigns specific routes and tasks",
                "Full system functionality without an internet connection, allowing data entry and sync once online"
            ]
        },
        {
            id: 5,
            title: "HR Connect",
            company: "PT Prakarsa Alam Segar (Dept HR & Production)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            notif: "Gmail",
            slides: [
                { label: "Employee Dashboard", desc: "Track incoming employees & assignments", bg: "slide-bg-1", icon: "👥" },
                { label: "Facility Calculator", desc: "Auto calculate ID cards, lockers, goodie bags", bg: "slide-bg-3", icon: "🎒" },
                { label: "Calendar View", desc: "Monthly overview of new hire arrivals", bg: "slide-bg-2", icon: "📅" }
            ],
            impact: [
                "Streamlines the administration of employee data, from onboarding to resignation",
                "Improves the accuracy of preparing essential employee facilities",
                "Provides management with a clear, calendar-based overview of new hire arrivals"
            ],
            features: [
                "A dedicated module to track incoming employees, verify ID card printing, and assign lockers",
                "Automatically calculates the required amount of equipment based on confirmed employee arrivals",
                "A visual dashboard that displays the daily count of new employees with drill-down capabilities"
            ]
        },
        {
            id: 6,
            title: "Shelf Life QA",
            company: "PT Prakarsa Alam Segar (Lab QA & QC)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            slides: [
                { label: "Sample Tracking", desc: "Seamless flow from QC to QA approval", bg: "slide-bg-5", icon: "🧪" },
                { label: "Approval Workflow", desc: "Rigorous approval by Foreman", bg: "slide-bg-1", icon: "✅" },
                { label: "Notification System", desc: "Real-time email & system alerts", bg: "slide-bg-4", icon: "📧" }
            ],
            impact: [
                "Ensures a seamless and traceable flow of samples from QC to QA to Foreman approval",
                "Enhances product safety by enforcing a rigorous approval process",
                "Facilitates faster communication between QC, QA, and Foreman"
            ],
            features: [
                "Flexible data entry modules for daily and monthly samples",
                "Real-time email and system alerts for approval or rejection status",
                "Integrated request and approval notification system"
            ]
        },
        {
            id: 7,
            title: "FL Produksi",
            company: "PT Prakarsa Alam Segar (Dept Noodle)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            notif: "Gmail",
            slides: [
                { label: "Equipment Tracking", desc: "Document cups & forks usage", bg: "slide-bg-3", icon: "🍜" },
                { label: "Digital Approval", desc: "Multi-level permission system", bg: "slide-bg-1", icon: "🔐" },
                { label: "Production Analysis", desc: "Trend & hygiene standards report", bg: "slide-bg-2", icon: "📊" }
            ],
            impact: [
                "Every usage and condition of production equipment (cups and forks) is documented",
                "Enhances the verification process by involving Foremen and Supervisors directly",
                "Replaces manual logs with a structured digital database"
            ],
            features: [
                "A multi-level permission system (Foreman/Spv) to validate reports before finalized",
                "Allows authorized users to manage machine lists and user approval hierarchies",
                "Production trends and hygiene standards analysis for PNC department"
            ]
        },
        {
            id: 8,
            title: "CPAR Audit",
            company: "PT Prakarsa Alam Segar (All Dept)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            notif: "Gmail",
            slides: [
                { label: "Audit Recording", desc: "Centralized module for CPAR", bg: "slide-bg-4", icon: "📋" },
                { label: "Tracking System", desc: "Monitor findings to final resolution", bg: "slide-bg-2", icon: "🔍" },
                { label: "Risk Dashboard", desc: "Data-driven insights for management", bg: "slide-bg-5", icon: "📈" }
            ],
            impact: [
                "Drives a systematic approach to fixing non-conformities",
                "Enhances management's ability to identify risks and improvement areas",
                "Streamlines the end-to-end audit lifecycle, saving time and resources"
            ],
            features: [
                "A centralized module to record, categorize, and document every corrective and preventive action request",
                "Advanced tracking tools to monitor findings from identification through to final resolution and verification"
            ]
        },
        {
            id: 9,
            title: "Smart Lab",
            company: "PT Prakarsa Alam Segar (Lab QA)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            notif: "Telegram",
            slides: [
                { label: "Lab Request System", desc: "Integrated digital request for DA & PA", bg: "slide-bg-3", icon: "🧬" },
                { label: "Task Progress", desc: "Real-time tracking of laboratory tasks", bg: "slide-bg-1", icon: "⏱️" },
                { label: "Approval Flow", desc: "Results verified by authorized Approver", bg: "slide-bg-5", icon: "✅" }
            ],
            impact: [
                "Accelerates the turnaround time for Daily Activities (DA) and Analysis Requests (PA)",
                "Provides full visibility into the status of laboratory tasks in real-time",
                "Ensures that all lab results are verified by an authorized Approver before being finalized"
            ],
            features: [
                "Custom interfaces and permissions for Users (Requestors), QA Analysts (Execution), and Approvers (Verification)",
                "An automated workflow that routes completed analyses to the designated authority for final sign-off",
                "Structured forms for capturing detailed information required for thorough laboratory analysis"
            ]
        },
        {
            id: 10,
            title: "E-Resepsionis",
            company: "PT Prakarsa Alam Segar (All Dept)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            notif: "Gmail",
            slides: [
                { label: "Document Scanner", desc: "Quick QR/ID card scanning system", bg: "slide-bg-1", icon: "📄" },
                { label: "Digital Signature", desc: "Valid handovers with e-signature", bg: "slide-bg-4", icon: "✍️" },
                { label: "Audit Trail", desc: "Complete tracking of document flow", bg: "slide-bg-2", icon: "🔗" }
            ],
            impact: [
                "Provides a clear digital audit trail for every document entering or leaving the company",
                "Streamlines the reception process by replacing manual logbooks with QR/ID card-scanning",
                "Clearly identifies the sender, recipient, and current status of each document"
            ],
            features: [
                "A quick-access feature for receptionists to process documents by scanning employee ID cards",
                "Captures digital signatures from both senders and recipients to ensure valid handovers"
            ]
        },
        {
            id: 11,
            title: "BA Co-Product",
            company: "PT Prakarsa Alam Segar (Dept Purchasing)",
            tech: ["Bootstrap", "jQuery", "Laravel", "MySQL"],
            type: "Web Based",
            notif: "Gmail",
            slides: [
                { label: "BA Statistics", desc: "Real-time stats of pending & completed BA", bg: "slide-bg-3", icon: "📊" },
                { label: "Digital Approval", desc: "Replace manual signatures with digital workflow", bg: "slide-bg-1", icon: "✍️" },
                { label: "Template System", desc: "Example BA & customizable templates", bg: "slide-bg-5", icon: "📝" }
            ],
            impact: [
                "Replaces slow manual signatures with an integrated digital approval workflow",
                "Allows management to view real-time statistics of pending, rejected, and completed Berita Acara"
            ],
            features: [
                "Provides a statistical overview of all BA activities, including total counts and completion status",
                "A streamlined module for creating new reports with Example BA and customizable templates"
            ]
        },
        {
            id: 12,
            title: "Serial System Communication",
            company: "EAJ CORE TEAM (Project GPL Sawit)",
            tech: [".NET", "MSSQL"],
            type: "Desktop Based",
            slides: [
                { label: "System Integration", desc: "Data sync between systems", bg: "slide-bg-2", icon: "🔗" },
                { label: "Real-time Monitor", desc: "Transparency into data communication", bg: "slide-bg-4", icon: "📡" }
            ],
            impact: [
                "Improve the accuracy and consistency of transaction data between systems",
                "Provide real-time transparency into data communication flows",
                "Support customization based on the client's specific business needs"
            ],
            features: [
                "System integration",
                "Data synchronization",
                "Real-time monitoring"
            ]
        },
        {
            id: 13,
            title: "Gmaps Scraper",
            company: "EAJ CORE TEAM (Internal Tools)",
            tech: ["Bootstrap", "ExpressJS"],
            type: "Web Based",
            slides: [
                { label: "Search Interface", desc: "Find specific business categories", bg: "slide-bg-1", icon: "🔍" },
                { label: "Scraped Results", desc: "Business details extracted automatically", bg: "slide-bg-3", icon: "📊" },
                { label: "Export to CSV", desc: "One-click download ready-to-use data", bg: "slide-bg-4", icon: "📥" }
            ],
            impact: [
                "Automates the process of gathering potential B2B leads, reducing manual prospecting time by up to 90%",
                "Allows businesses to monitor competitor/partnership locations and service ratings",
                "Minimizes human error in data entry, ensuring the marketing database remains clean"
            ],
            features: [
                "Find specific business categories or keywords",
                "Scrapes essential business details including name, address, postal code, and contact numbers",
                "One-click feature to download all scrapped data into ready-to-use format for CRM or marketing tools"
            ]
        },
        {
            id: 14,
            title: "Rinku - Shorten Link",
            company: "EAJ CORE TEAM (Internal Tools)",
            tech: ["Bootstrap", "jQuery", "ExpressJS", "MySQL"],
            type: "Web Based",
            slides: [
                { label: "Link Shortener", desc: "Convert long URLs into concise links", bg: "slide-bg-5", icon: "🔗" },
                { label: "Link Manager", desc: "View and manage generated short links", bg: "slide-bg-1", icon: "📋" }
            ],
            impact: [
                "Streamlined the process of sharing long, complex URLs for internal communications",
                "Centralized link management, keeping track of various project resources",
                "Enabled quicker access to essential tools through easy-to-remember short aliases"
            ],
            features: [
                "Quickly convert long URLs into concise, shareable links with a single click",
                "A clean user interface for individuals to view and manage their generated short links",
                "Integrated login system to ensure only authorized team members can access and create links"
            ]
        },
        {
            id: 15,
            title: "Nobuka - Simple Tasklist",
            company: "EAJ CORE TEAM (Internal Tools)",
            tech: ["Bootstrap", "ExpressJS", "Electron"],
            type: "Desktop Based",
            slides: [
                { label: "Task Dashboard", desc: "Categorize tasks: General, Work, Personal", bg: "slide-bg-4", icon: "✅" },
                { label: "Desktop App", desc: "Robust lightweight Electron application", bg: "slide-bg-2", icon: "🖥️" }
            ],
            impact: [
                "Provided a dedicated desktop environment for task tracking",
                "Enabled clear categorization of tasks (General, Work, Personal)"
            ],
            features: [
                "Built with Electron to provide a robust and lightweight desktop application",
                "Quickly toggle between Semua (All), Tugas Aktif (Active), and Selesai (Completed)"
            ]
        },
        {
            id: 16,
            title: "Momodoro - Your Fav Timer ❤",
            company: "EAJ CORE TEAM (Internal Tools)",
            tech: ["Bootstrap", "ExpressJS", "Electron"],
            type: "Desktop Based",
            slides: [
                { label: "Timer Interface", desc: "Simple Pause, Reset, and Start", bg: "slide-bg-3", icon: "⏱️" },
                { label: "Activity History", desc: "Recent Activity section for momentum", bg: "slide-bg-5", icon: "📊" }
            ],
            impact: [
                "Encouraged disciplined work intervals, helping team members maintain high concentration without burnout",
                "Helped users track their active work sessions for better self-management"
            ],
            features: [
                "Features a Recent Activity section to keep a history of completed sessions",
                "Simple and intuitive Pause, Reset, and Start functionalities"
            ]
        },
        {
            id: 17,
            title: "Mj sPay",
            company: "CV Mitra Jaya Solusindo",
            tech: ["Bootstrap", "Laravel", "MySQL"],
            type: "Web Based",
            slides: [
                { label: "Tax Calculator", desc: "Instant calculation based on regional regulations", bg: "slide-bg-1", icon: "🚗" },
                { label: "Payment Process", desc: "Clean interface for document submission", bg: "slide-bg-3", icon: "💳" },
                { label: "Report Dashboard", desc: "Structured vehicle tax payment reports", bg: "slide-bg-4", icon: "📊" }
            ],
            impact: [
                "The vehicle tax payment process becomes more efficient",
                "Reduces the risk of late vehicle tax payments",
                "Track vehicle tax payments in real time",
                "Generate accurate and structured vehicle tax payment reports"
            ],
            features: [
                "An integrated system that calculates vehicle tax fees instantly based on the latest regional regulations",
                "A clean and user-friendly web interface that allows clients to submit documents and process payments seamlessly"
            ]
        },
        {
            id: 18,
            title: "Sinpus (Sistem Informasi Perpustakaan)",
            company: "SMK Islam PB. Soedirman 2",
            tech: ["Bootstrap", "Laravel", "MySQL"],
            type: "Web Based",
            slides: [
                { label: "Book Search", desc: "Find books by title, author, or category", bg: "slide-bg-5", icon: "📚" },
                { label: "Availability Status", desc: "Real-time book availability indicator", bg: "slide-bg-2", icon: "📖" },
                { label: "Mobile Friendly", desc: "Seamless experience on smartphones", bg: "slide-bg-4", icon: "📱" }
            ],
            impact: [
                "Makes it easier for students to see the availability of books they wish to borrow",
                "Reduces long queues when borrowing books at the library",
                "Increases the efficiency of book data management in the library"
            ],
            features: [
                "Fast and intuitive search system to help students find books by title, author, or category instantly",
                "A dynamic status indicator that shows whether a book is available, on loan, or out of stock",
                "Optimized interface built with Bootstrap for seamless experience on smartphones"
            ]
        },
        {
            id: 19,
            title: "Absensi",
            company: "SMK Islam PB. Soedirman 2",
            tech: ["Bootstrap", "Laravel", "MySQL"],
            type: "Web Based",
            slides: [
                { label: "Student Attendance", desc: "Paperless attendance recording", bg: "slide-bg-1", icon: "✏️" },
                { label: "Teacher Dashboard", desc: "Monitor daily attendance activities", bg: "slide-bg-3", icon: "📊" }
            ],
            impact: [
                "The attendance process is faster and more automated, eliminating manual forms",
                "Reduces errors in recording student attendance",
                "Increases efficiency in managing student attendance data",
                "Provides accurate and easily accessible attendance reports for teachers"
            ],
            features: [
                "A fast and paperless way for students to record their presence, eliminating manual physical forms",
                "A comprehensive web-based interface for educators to monitor daily attendance activities"
            ]
        }
    ];

    function renderProjects() {
        let html = '';
        projects.forEach(p => {
            const techHtml = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
            html += `
            <div class="col-md-6 col-lg-4">
                <div class="project-card" data-id="${p.id}">
                    <div class="project-header">
                        <h3 class="project-title">${p.title}</h3>
                        <div class="project-company">${p.company}</div>
                    </div>
                    <div class="project-body">
                        <div class="tech-stack">${techHtml}</div>
                        <div style="font-size: 0.85rem; color: #666; margin: 0.5rem 0;">
                            ${p.type} ${p.notif ? `• Notif: ${p.notif}` : ''} ${p.api ? `• API: ${p.api}` : ''} ${p.special ? `• ${p.special}` : ''}
                        </div>
                        <div class="impact-box">
                            <div class="impact-title">Key Impact</div>
                            <ul class="impact-list">
                                ${p.impact.slice(0, 2).map(i => `<li>${i}</li>`).join('')}
                            </ul>
                        </div>
                        <button class="btn" style="width: 100%; background: var(--brutal-black); color: var(--brutal-yellow); border: 2px solid var(--brutal-black); font-family: 'Space Mono'; font-weight: 700; cursor: pointer;">
                            View Details →
                        </button>
                    </div>
                </div>
            </div>`;
        });
        $('#projectGrid').html(html);
    }

    // Open modal with carousel
    $('#projectGrid').on('click', '.project-card', function() {
        const id = $(this).data('id');
        openModal(id);
    });

    function openModal(id) {
        const p = projects.find(x => x.id === id);
        if (!p) return;

        const techHtml = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');

        // Build carousel slides
        let carouselHtml = '';
        let indicatorsHtml = '';
        p.slides.forEach((s, i) => {
            const activeClass = i === 0 ? 'active' : '';
            indicatorsHtml += `<button type="button" data-bs-target="#screenshotCarousel${p.id}" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}"></button>`;
            carouselHtml += `
            <div class="carousel-item ${activeClass}">
                <div class="screenshot-slide ${s.bg}">
                    <div class="screenshot-placeholder">
                        <div class="screen-icon">${s.icon}</div>
                        <div class="screen-label">${s.label}</div>
                        <div class="screen-desc">${s.desc}</div>
                        <div style="margin-top: 1.5rem; padding: 0.8rem 1.5rem; background: var(--brutal-white); border: 2px solid var(--brutal-black); font-family: 'Space Mono'; font-size: 0.8rem;">
                            📸 Replace this with actual screenshot
                        </div>
                    </div>
                </div>
            </div>`;
        });

        const impactHtml = p.impact.map(i => `<li>${i}</li>`).join('');
        const featuresHtml = p.features.map(f => `<li>${f}</li>`).join('');

        const modalContent = `
            <div class="project-company mb-3" style="font-size: 0.9rem; color: #666;">${p.company}</div>
            <div class="tech-stack mb-3">${techHtml}</div>
            <div style="font-size: 0.85rem; color: #666; margin-bottom: 1.5rem;">
                <strong>Type:</strong> ${p.type} 
                ${p.notif ? `| <strong>Notification:</strong> ${p.notif}` : ''} 
                ${p.api ? `| <strong>API:</strong> ${p.api}` : ''} 
                ${p.special ? `| <strong>Special:</strong> ${p.special}` : ''}
            </div>

            <!-- IMAGE CAROUSEL -->
            <div class="screenshot-carousel-wrapper">
                <div id="screenshotCarousel${p.id}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-indicators">${indicatorsHtml}</div>
                    <div class="carousel-inner">${carouselHtml}</div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#screenshotCarousel${p.id}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#screenshotCarousel${p.id}" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>

            <h5 class="modal-impact-title">✅ Impact</h5>
            <ul class="modal-impact-list">${impactHtml}</ul>
            
            <h5 class="modal-features-title">⚙️ Features</h5>
            <ul class="modal-features-list">${featuresHtml}</ul>
        `;

        $('#modalTitle').text(p.title);
        $('#modalBody').html(modalContent);

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();

        // Initialize carousel after modal is shown
        $('#projectModal').on('shown.bs.modal', function() {
            const carouselEl = document.getElementById(`screenshotCarousel${p.id}`);
            if (carouselEl) {
                new bootstrap.Carousel(carouselEl, {
                    interval: 3000,
                    ride: 'carousel'
                });
            }
        });

        // Clean up carousel when modal closes
        $('#projectModal').on('hidden.bs.modal', function() {
            const carouselEl = document.getElementById(`screenshotCarousel${p.id}`);
            if (carouselEl) {
                const bsCarousel = bootstrap.Carousel.getInstance(carouselEl);
                if (bsCarousel) bsCarousel.dispose();
            }
        });
    }

    renderProjects();
});