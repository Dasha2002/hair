document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Calculator Selection
    const calcOptions = document.querySelectorAll('.calc-option');
    calcOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            calcOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


//мобтльное менб
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav a, .mobile-social-link, .btn-mobile-full');

    // Открытие/закрытие меню по клику на бургер
    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            // Блокируем скролл страницы, когда меню открыто
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Закрытие меню при клике на ссылку внутри него
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});


//Карусель результат работы
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.results-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        on: {
            init: function() {
                if (this.activeIndex === 0) {
                    this.params.navigation.prevEl.disabled = true;
                }
            }
        }
    });
});

// Калькулятор
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.quiz-step');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const progressBar = document.querySelector('.quiz-progress-bar');
    const currentStepEl = document.querySelector('.current-step');
    const totalSteps = steps.length;
    let currentStep = 1;

    function updateStep() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index + 1 === currentStep);
        });
        
        const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressBar.style.width = progress + '%';
        currentStepEl.textContent = currentStep;
        
        prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
        
        if (currentStep === totalSteps) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        }
    }

    function validateStep() {
        const currentStepEl = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
        const requiredInputs = currentStepEl.querySelectorAll('input[data-required], input[required]');
        
        let isValid = true;
        requiredInputs.forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                const name = input.name;
                const checked = currentStepEl.querySelector(`input[name="${name}"]:checked`);
                if (!checked) isValid = false;
            } else if (!input.value.trim()) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    nextBtn.addEventListener('click', () => {
        if (validateStep() && currentStep < totalSteps) {
            currentStep++;
            updateStep();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStep();
        }
    });

    const contactTypes = document.querySelectorAll('.contact-type');
    contactTypes.forEach(type => {
        type.addEventListener('click', () => {
            contactTypes.forEach(t => t.classList.remove('active'));
            type.classList.add('active');
        });
    });

    const phoneInput = document.getElementById('phoneInput');
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value[0] === '7' || value[0] === '8') {
                value = value.substring(1);
            }
            let formattedValue = '+7';
            if (value.length > 0) formattedValue += ' (' + value.substring(0, 3);
            if (value.length >= 3) formattedValue += ') ' + value.substring(3, 6);
            if (value.length >= 6) formattedValue += '-' + value.substring(6, 8);
            if (value.length >= 8) formattedValue += '-' + value.substring(8, 10);
            e.target.value = formattedValue;
        }
    });

    document.getElementById('hairQuiz').addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateStep()) {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            console.log('Form data:', data);
            alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        }
    });

    updateStep();
});




// ===== Popup  =====
class PopupManager {
    constructor() {
        this.popup = document.getElementById('consultationPopup');
        this.closeBtn = this.popup?.querySelector('.popup-close');
        this.form = document.getElementById('popupForm');
        this.phoneInput = document.getElementById('popupPhone');
        this.nameInput = document.getElementById('popupName');
        
        if (this.popup) this.init();
    }
    
    init() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-popap')) {
                e.preventDefault();
                this.open();
            }
        });

        this.closeBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            this.close();
        });

        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.close();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popup.classList.contains('active')) {
                this.close();
            }
        });

        this.initPhoneMask();
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    open() {
        this.popup.classList.add('active');
        document.body.classList.add('popup-open');
        
        setTimeout(() => {
            this.nameInput?.focus();
        }, 100);
        
        this.form?.reset();
        this.form?.classList.remove('success');
    }
    
    close() {
        this.popup.classList.remove('active');
        document.body.classList.remove('popup-open');
    }
    
    initPhoneMask() {
        if (!this.phoneInput) return;
        
        const phoneInput = this.phoneInput;
        
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            
            let formattedValue = '';
            
            if (value.length > 0) {
                formattedValue = '(';
                formattedValue += value.substring(0, 3);
            }
            if (value.length >= 3) {
                formattedValue += ') ';
                formattedValue += value.substring(3, 6);
            }
            if (value.length >= 6) {
                formattedValue += '-';
                formattedValue += value.substring(6, 8);
            }
            if (value.length >= 8) {
                formattedValue += '-';
                formattedValue += value.substring(8, 10);
            }
            
            e.target.value = formattedValue;
        });
        
        phoneInput.addEventListener('keydown', (e) => {
            if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
            }
    
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && 
                (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const name = this.nameInput?.value.trim();
        const phone = this.phoneInput?.value.trim();
        
        if (!name || !phone) {
            this.showError('Пожалуйста, заполните все поля');
            return;
        }
        
        if (phone.replace(/\D/g, '').length < 10) {
            this.showError('Пожалуйста, введите корректный номер телефона');
            return;
        }
        
        const submitBtn = this.form?.querySelector('.popup-submit');
        if (!submitBtn) return;
        
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.showSuccess();
            console.log('Form submitted:', { name, phone });
            
        } catch (error) {
            console.error('Error:', error);
            this.showError('Произошла ошибка. Попробуйте позже.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
    
    showSuccess() {
        const successHTML = `
            <div class="popup-success-message">
                <h3>Спасибо за заявку!</h3>
                <p>Наш специалист свяжется с вами в течение 15 минут</p>
            </div>
        `;
        
        if (this.form) {
            this.form.outerHTML = successHTML;
        }
    
        setTimeout(() => {
            this.close();
        }, 3000);
    }
    
    showError(message) {
        if (!this.popup) return;
        
        const existingError = this.popup.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        const errorEl = document.createElement('div');
        errorEl.className = 'form-error';
        errorEl.textContent = message;
        errorEl.style.cssText = `
            color: #d32f2f;
            font-size: 14px;
            text-align: center;
            margin-top: -10px;
            margin-bottom: 10px;
            animation: shake 0.3s ease;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }
        `;
        document.head.appendChild(style);
        
        this.form?.insertBefore(errorEl, this.form.firstChild);
        
        setTimeout(() => {
            errorEl.remove();
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PopupManager();
});

/*Вопросы*/

class FAQAccordion {
    constructor(selector) {
        this.faqList = document.querySelector(selector);
        if (!this.faqList) return;
        
        this.items = this.faqList.querySelectorAll('.faq-item');
        this.init();
    }
    
    init() {
        this.faqList.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', (e) => this.toggleItem(e.currentTarget));
        });
    }
    
    toggleItem(button) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const answer = document.getElementById(button.getAttribute('aria-controls'));
        
        if (!answer) return;
        
        button.setAttribute('aria-expanded', !isExpanded);
        
        if (isExpanded) {
            this.closeAnswer(answer);
        } else {
            this.openAnswer(answer);
        }
    }
    
    openAnswer(answer) {
        answer.hidden = false;
        answer.offsetHeight;
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
    
    closeAnswer(answer) {
        answer.style.maxHeight = '0px';
        const onTransitionEnd = () => {
            answer.hidden = true;
            answer.style.maxHeight = '';
            answer.removeEventListener('transitionend', onTransitionEnd);
        };
        answer.addEventListener('transitionend', onTransitionEnd);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FAQAccordion('.faq-list');
});


// form
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phoneInput');
    const form = document.getElementById('consultationForm');
    
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value[0] === '7' || value[0] === '8') {
                value = value.substring(1);
            }
            
            let formattedValue = '+7';
            if (value.length > 0) formattedValue += ' (' + value.substring(0, 3);
            if (value.length >= 3) formattedValue += ') ' + value.substring(3, 6);
            if (value.length >= 6) formattedValue += '-' + value.substring(6, 8);
            if (value.length >= 8) formattedValue += '-' + value.substring(8, 10);
            
            e.target.value = formattedValue;
        }
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const phone = phoneInput.value.trim();
        
        if (phone.replace(/\D/g, '').length < 10) {
            alert('Пожалуйста, введите корректный номер телефона');
            return;
        }
        
        console.log('Form submitted with phone:', phone);
        
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
});

//карта и контакты


class ContactsMap {
    /**
     * @param {string} elementId 
     * @param {Object} options 
     */
    constructor(elementId, options = {}) {
        this.element = document.getElementById(elementId);
        if (!this.element) return;

        this.config = {
            center: [43.569518, 39.757575], 
            zoom: 14,
            markerIcon: 'https://static.tildacdn.com/tild6234-6234-4637-b935-623335666463/36.svg',
            markerTitle: 'TransHair tour Сочи',
            overlayColor: '#f1dac1',
            apiKey: '', 
            ...options,
            ...this.readDataAttributes()
        };

        this.map = null;
        this.isInitialized = false;
        this.observer = null;

        this.init();
    }

    /**
     * Read configuration from HTML data-* attributes
     * @returns {Object} Parsed config from attributes
     */
    readDataAttributes() {
        const config = {};
        const attrs = this.element.dataset;
        
        if (attrs.center) {
            const [lat, lng] = attrs.center.split(',').map(Number);
            config.center = [lat, lng];
        }
        if (attrs.zoom) config.zoom = parseInt(attrs.zoom, 10);
        if (attrs.markerIcon) config.markerIcon = attrs.markerIcon;
        if (attrs.markerTitle) config.markerTitle = attrs.markerTitle;
        if (attrs.overlayColor) config.overlayColor = attrs.overlayColor;
        
        return config;
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !this.isInitialized) {
                            this.load();
                        }
                    });
                },
                { rootMargin: '300px', threshold: 0.01 }
            );
            this.observer.observe(this.element);
        } else {
            this.load();
        }

        this.initSectionAnimations();
    }

    async load() {
        try {
            await this.loadYandexAPI();
            this.createMap();
            this.addMarker();
            this.addOverlay();
            this.isInitialized = true;
        } catch (error) {
            console.error('Failed to load map:', error);
            this.element.innerHTML = '<p style="padding:20px;color:#4b2f1b">Карта временно недоступна</p>';
        }
    }

    /**
     * Dynamically load Yandex Maps API script
     * @returns {Promise<void>}
     */
    loadYandexAPI() {
        return new Promise((resolve, reject) => {
            if (window.ymaps?.Map) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            const apiKeyParam = this.config.apiKey ? `&apikey=${this.config.apiKey}` : '';
            
            script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU${apiKeyParam}`;
            script.async = true;
            script.onload = () => ymaps.ready(resolve);
            script.onerror = () => reject(new Error('Failed to load Yandex Maps API'));
            
            document.head.appendChild(script);
        });
    }

    createMap() {
        this.map = new ymaps.Map(this.element.id, {
            center: this.config.center,
            zoom: this.config.zoom,
            controls: ['zoomControl', 'typeSelector']
        }, {
            suppressMapOpenBlock: true
        });

        this.map.options.set('preset', 'islands#dark');
    }


    addMarker() {
        const placemark = new ymaps.Placemark(
            this.config.center,
            {
                hintContent: this.config.markerTitle,
                balloonContentHeader: this.config.markerTitle
            },
            {
                iconLayout: 'default#image',
                iconImageHref: this.config.markerIcon,
                iconImageSize: [48, 48],
                iconImageOffset: [-24, -48], 
                preset: 'none'
            }
        );

        this.map.geoObjects.add(placemark);
    }

    addOverlay() {
        const bounds = this.map.getBounds();
        const overlay = new ymaps.Rectangle(
            bounds,
            {},
            {
                fillColor: this.config.overlayColor,
                fillOpacity: 0.15,
                stroke: false,
                interactive: false
            }
        );
        this.map.geoObjects.add(overlay);
    }

    initSectionAnimations() {
        const section = this.element.closest('.contacts-section');
        if (!section) return;

        const animObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        section.classList.add('is-visible');
                        section.querySelectorAll('[data-animate][data-delay]').forEach(el => {
                            el.style.setProperty('--delay', el.dataset.delay);
                        });
                        
                        animObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        animObserver.observe(section);
    }

    refresh() {
        if (this.map) {
            this.map.container.fitToViewport();
        }
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        if (this.map) {
            this.map.destroy();
            this.map = null;
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.contacts-map[data-lazy="true"]').forEach(mapEl => {
        new ContactsMap(mapEl.id);
    });


    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {

            document.querySelectorAll('.contacts-map').forEach(mapEl => {
                const instance = window[`__map_${mapEl.id}`];
                if (instance?.refresh) instance.refresh();
            });
        }, 250);
    });
});

// Свайпер для видео
document.addEventListener('DOMContentLoaded', function() {
    const videosSwiper = new Swiper('.videos-swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        touchRatio: 1,

        breakpoints: {
            640: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
        
        observer: true,
        observeParents: true,
    });
    
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('▶️ Воспроизведение видео');
            alert('🎬 Открытие видео плеера');
        });
    });
});