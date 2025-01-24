class FormApp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

        <div class="contact_form-block w-form">
        <form id="contact" name="email-form" class="contact_form">
            <div style="-webkit-transform:translate3d(0, 9.3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 9.3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 9.3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 9.3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                class="form_field_main-wrapper">
                <div style="height:13rem" class="form_title">
                    <div class="form_top">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                            class="form_title-heading text-size-large text-weight-medium">
                            Get in
                            touch</div>
                        <div class="form_number-wrapper">
                            <div class="form_number-list">
                                <div class="form_number is-moving">1</div>
                                <div class="form_number is-moving">2</div>
                                <div class="form_number is-moving">3</div>
                            </div>
                            <div class="form_number">/</div>
                            <div class="form_number">3</div>
                        </div>
                    </div>
                    <div style="opacity:1" class="form_title-text">Dr Jamal Ajmi Team Member will typically read your message within 24h.</div>
                </div>
                <div class="form_field-wrapper"><input
                        class="form_field is-email w-input" autofocus="true"
                        maxlength="256" name="email" data-name="Email"
                        placeholder="Work email" type="email" id="email" />
                    <div style="width:5rem"
                        class="form_button-placeholder is-email"></div>
                </div>
                <div class="form_field-wrapper"><input
                        class="form_field is-name w-input" maxlength="256"
                        name="name" data-name="Name"
                        style="height:0rem;opacity:0;display:none"
                        placeholder="Full name" type="text" id="name"
                        required="" />
                    <div style="width:5rem"
                        class="form_button-placeholder is-name"></div>
                </div><textarea class="form_field is-input w-input"
                    maxlength="5000" name="message" data-name="Message"
                    style="opacity:0;width:100%;height:0rem"
                    placeholder="Add message" id="message"></textarea>
            </div>
            <div class="form_bottom"><label style="width:0px;opacity:0"
                    class="w-checkbox form_checkbox-field">
                    <div
                        class="w-checkbox-input w-checkbox-input--inputType-custom checkbox">
                    </div>
                    <input type="checkbox" id="checkbox" name="checkbox"
                        data-name="Checkbox" required=""
                        style="opacity:0;position:absolute;z-index:-1" /><span
                        style="opacity:0;-webkit-transform:translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        class="checkbox-label w-form-label"
                        for="checkbox">By sending this message
                        you accept Aker’s <a href="#"
                            class="form_link">Terms &amp;
                            Privacy</a>.</span>
                </label>
                <div class="form_button-placeholder"></div>
            </div>
            <div class="form_submit-button-wrapper is-active">
                <div class="form_submit-button-click1"></div>
                <div class="form_submit-button-click2"></div>

                <div style="opacity:0;display:none"
                    class="form_submit-text">Send</div>

                    
            <div class="form_submit-lottie" 
            data-animation-type="lottie"
            data-src="https://cdn.prod.website-files.com/657629e1b082a84e377fbd6e/657629e1b082a84e377fbdee_Flow%201%20(2).json"
            data-loop="0" data-direction="1" data-autoplay="1" data-is-ix2-target="0"
            data-renderer="svg" data-duration="0"></div><input type="submit"
            data-wait="Please wait..." class="form_submit-button w-button" value="Submit" />
            </div>
        </form>
        <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
        </div>

    </div>

        `;
    }
}

// Define the custom element
customElements.define('form-app', FormApp);
