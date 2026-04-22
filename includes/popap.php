<div class="popup-overlay" id="consultationPopup">
    <div class="popup-container">
        <button class="popup-close" aria-label="Закрыть окно">
            <svg viewBox="0 0 23 23" width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5L17.5 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M17.5 5.5L5.5 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
        </button>

        <div class="popup-content">
            <div class="popup-image-wrapper">
                <img src="https://optim.tildacdn.com/tild3635-3931-4336-b330-303464343435/-/format/webp/AKZ_3441.png.webp"
                    alt="Консультация врача"
                    class="popup-image">
            </div>

            <div class="popup-text-wrapper">
                <h2 class="popup-title">Консультация с врачом международного уровня по пересадке волос</h2>
                <p class="popup-description">Оставьте заявку и наши специалист свяжется в течении 15 минут</p>

                <form class="popup-form" id="popupForm">
                    <div class="form-group">
                        <input type="text"
                            class="form-input"
                            id="popupName"
                            name="name"
                            placeholder="Введите имя"
                            required
                            autocomplete="name">
                    </div>

                    <div class="form-group">
                        <div class="phone-input-wrapper">
                            <span class="phone-code">+7</span>
                            <input type="tel"
                                class="form-input phone-input"
                                id="popupPhone"
                                name="phone"
                                placeholder="(000) 000-00-00"
                                required
                                autocomplete="tel">
                        </div>
                    </div>

                    <button type="submit" class="popup-submit">ОТПРАВИТЬ</button>
                </form>

                <p class="popup-legal">
                    Нажимая на кнопку Вы соглашаетесь с
                    <a href="/personal" class="popup-link">политикой конфиденциальности</a>
                    и даёте
                    <a href="/personal" class="popup-link">согласие на обработку персональных данных</a>
                </p>
            </div>
        </div>
    </div>
</div>