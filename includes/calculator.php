<section class="quiz-section" id="calculator">
    <div class="container-calculator">
        <h2 class="calculator-heading" data-animate="fade-up">Рассчитаем стоимость за 15 минут</h2>
        <p class="subtitle" data-animate="fade-up">Пройдите небольшой опрос и получите скидку 5%<br> на услуги клиники</p>
        <div class="quiz-wrapper">
            <div class="quiz-header">
                <h2 class="quiz-title">Узнайте стоимость пересадки</h2>
            </div>

            <div class="quiz-content">
                <!-- Progress Bar -->
                <div class="quiz-progress">
                    <div class="quiz-progress-bar" style="width: 60%"></div>
                </div>
                <div class="quiz-step-counter">Шаг: <span class="current-step">3</span>/<span class="total-steps">5</span></div>

                <form class="quiz-form" id="hairQuiz">
                    <!-- Step 1: Zone Selection -->
                    <div class="quiz-step" data-step="1">
                        <h3 class="step-title">На какую зону вы хотели бы пересадить волосы?</h3>
                        <div class="image-select-grid">
                            <label class="image-select-item">
                                <input type="checkbox" name="zone" value="Борода">
                                <div class="select-image" style="background-image: url('https://static.tildacdn.com/tild6365-6138-4933-b263-636263613661/front-view-man-brush.jpg')"></div>
                                <span class="select-label">Борода</span>
                            </label>
                            <label class="image-select-item">
                                <input type="checkbox" name="zone" value="Брови">
                                <div class="select-image" style="background-image: url('https://static.tildacdn.com/tild3737-6336-4430-b135-353664346262/DeWatermarkai_174705.jpg')"></div>
                                <span class="select-label">Брови</span>
                            </label>
                            <label class="image-select-item">
                                <input type="checkbox" name="zone" value="Шрамы">
                                <div class="select-image" style="background-image: url('https://static.tildacdn.com/tild6434-3566-4263-b432-376233393337/woman-getting-hair-l.jpg')"></div>
                                <span class="select-label">Шрамы</span>
                            </label>
                            <label class="image-select-item">
                                <input type="checkbox" name="zone" value="Голова">
                                <div class="select-image" style="background-image: url('https://static.tildacdn.com/tild6365-3463-4539-a537-343261353831/adult-male-doing-fol.jpg')"></div>
                                <span class="select-label">Голова</span>
                            </label>
                        </div>
                        <p class="step-hint">*Отметьте один или несколько вариантов</p>
                    </div>

                    <!-- Step 2: Gender -->
                    <div class="quiz-step" data-step="2">
                        <h3 class="step-title">Укажите Ваш пол</h3>
                        <div class="image-select-grid image-select-2-col">
                            <label class="image-select-item">
                                <input type="checkbox" name="gender" value="Мужчина">
                                <div class="select-image" style="background-image: url('https://static.tildacdn.com/tild6530-3932-4461-a665-663263393636/DeWatermarkai_174706.jpg')"></div>
                                <span class="select-label">Мужчина</span>
                            </label>
                            <label class="image-select-item">
                                <input type="checkbox" name="gender" value="Женщина">
                                <div class="select-image" style="background-image: url('https://static.tildacdn.com/tild6431-3565-4565-b263-623136366632/close-up-young-beaut.jpg')"></div>
                                <span class="select-label">Женщина</span>
                            </label>
                        </div>
                    </div>

                    <!-- Step 3: Previous Surgery -->
                    <div class="quiz-step" data-step="3">
                        <h3 class="step-title">Вам проводилось хирургическое восстановление волос?</h3>
                        <div class="radio-group">
                            <label class="radio-item">
                                <input type="radio" name="surgery" value="Да, проводилось">
                                <span class="radio-indicator"></span>
                                <span>Да, проводилось</span>
                            </label>
                            <label class="radio-item">
                                <input type="radio" name="surgery" value="Нет, не проводилось">
                                <span class="radio-indicator"></span>
                                <span>Нет, не проводилось</span>
                            </label>
                            <label class="radio-item">
                                <input type="radio" name="surgery" value="Не помню">
                                <span class="radio-indicator"></span>
                                <span>Не помню</span>
                            </label>
                        </div>
                    </div>

                    <!-- Step 4: City -->
                    <div class="quiz-step" data-step="4">
                        <h3 class="step-title">В каком городе Вам удобнее посетить консультацию специалиста?</h3>
                        <div class="radio-group radio-buttons">
                            <label class="radio-item">
                                <input type="radio" name="city" value="Сочи">
                                <span class="radio-indicator"></span>
                                <span>Сочи</span>
                            </label>
                            <label class="radio-item">
                                <input type="radio" name="city" value="Пятигорск">
                                <span class="radio-indicator"></span>
                                <span>Пятигорск</span>
                            </label>
                            <label class="radio-item">
                                <input type="radio" name="city" value="Севастополь">
                                <span class="radio-indicator"></span>
                                <span>Севастополь</span>
                            </label>
                            <label class="radio-item">
                                <input type="radio" name="city" value="Другой">
                                <span class="radio-indicator"></span>
                                <span>Другой</span>
                            </label>
                        </div>
                    </div>

                    <!-- Step 5: Contact -->
                    <div class="quiz-step" data-step="5">
                        <h3 class="step-title">Укажите номер, и мы в течение 15 минут предоставим расчёт стоимости и персональный план пересадки</h3>
                        
                        <div class="contact-methods">
                            <div class="contact-methods-types">
                                <label class="contact-type active">
                                    <input type="radio" name="contactType" value="phone" checked>
                                    <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.36-.62.25-1-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                                    </svg>
                                    <span>Телефон</span>
                                </label>
                                <label class="contact-type">
                                    <input type="radio" name="contactType" value="telegram">
                                    <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                                    </svg>
                                    <span>Telegram</span>
                                </label>
                                <label class="contact-type">
                                    <input type="radio" name="contactType" value="whatsapp">
                                    <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    <span>WhatsApp</span>
                                </label>
                                <label class="contact-type">
                                    <input type="radio" name="contactType" value="viber">
                                    <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.001 2c-5.522 0-10 4.477-10 10 0 5.521 4.478 10 10 10s10-4.479 10-10c0-5.523-4.478-10-10-10zm0 18.3c-4.573 0-8.3-3.726-8.3-8.3 0-4.574 3.727-8.3 8.3-8.3 4.574 0 8.3 3.726 8.3 8.3 0 4.574-3.726 8.3-8.3 8.3zm4.49-5.583c-.205.577-1.184 1.099-1.637 1.168-.438.066-.872.15-2.635-.544-2.227-.876-3.651-3.183-3.761-3.329-.109-.147-.885-1.178-.885-2.248 0-1.07.563-1.598.761-1.814.193-.21.42-.263.56-.263.138 0 .277 0 .397.006.128.006.3.048.444.524.165.544.563 1.876.612 1.977.049.101.081.218.016.349-.065.131-.098.213-.196.327-.098.114-.206.254-.295.343-.098.098-.2.204-.085.401.115.197.511.839 1.094 1.359.75.669 1.381.875 1.577.973.196.098.31.082.424-.049.115-.131.49-.574.621-.771.131-.196.262-.163.441-.098.18.066 1.15.542 1.346.64.196.098.327.147.376.229.049.082.049.474-.156 1.051z"/>
                                    </svg>
                                    <span>Viber</span>
                                </label>
                            </div>
                            
                            <div class="contact-input-wrapper">
                                <input type="tel" class="contact-input" placeholder="+7 (000) 000-00-00" id="phoneInput">
                            </div>
                        </div>
                    </div>

                    <!-- Navigation -->
                    <div class="quiz-navigation">
                        <button type="button" class="btn btn-prev" id="prevBtn">
                            <svg viewBox="0 0 18 18" fill="none">
                                <path d="M14.25 9H3.75" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                                <path d="M9 3.75L3.75 9L9 14.25" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <button type="button" class="btn btn-next" id="nextBtn">
                            <svg viewBox="0 0 18 18" fill="none">
                                <path d="M3.75 9L14.25 9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                                <path d="M9 14.25L14.25 9L9 3.75" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                            </svg>
                            <span>ДАЛЕЕ</span>
                        </button>
                        <button type="submit" class="btn btn-submit" id="submitBtn">
                            <span>УЗНАТЬ РЕЗУЛЬТАТ</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>