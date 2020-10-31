/* This code goes ABOVE the main HTML Comment Box code!
 replace the text in the single quotes below to customize labels.*/
hcb_user = {
    /* L10N */

    comments_header : '<h3><b>Deja tu comentario</b></h3>',
    name_label : 'Nombre',
    content_label: 'Comentario',
    submit : 'Enviar',
    logout_link : '<img title="log out" src="https://www.htmlcommentbox.com/static/images/door_out.png" alt="[logout]" class="hcb-icon hcb-door-out"/>',
    admin_link : '<img src="https://www.htmlcommentbox.com/static/images/door_in.png" alt="[login]" class="hcb-icon hcb-door-in"/>',
    no_comments_msg: 'Nadie ha comentado aún ¡deja tú el primer comentario!',
    add:'Agrega tu comentario',
    again: 'Publica otro comentario',
    rss:'<img src="https://www.htmlcommentbox.com/static/images/feed.png" class="hcb-icon" alt="rss"/> ',
    said:'dijo:',
    prev_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_left.png" class="hcb-icon" title="previous page" alt="[prev]"/>',
    next_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_right.png" class="hcb-icon" title="next page" alt="[next]"/>',
    showing:'Mostrando',
    to:'para',
    website_label:'website (opcional)',
    email_label:'Correo Electrónico',
    anonymous:'Anónimo',
    mod_label:'(moderadora)',
    subscribe:'email me replies',
    add_image:'Agregar imagen',
    are_you_sure:'¿Quieres reportar este comentario como inapropiado?',

    reply:'<img src="https://www.htmlcommentbox.com/static/images/reply.png"/> responder',
    flag:'<img src="https://www.htmlcommentbox.com/static/images/flag.png"/> reportar',
    like:'<img src="https://www.htmlcommentbox.com/static/images/like.png"/> me gusta',

    /* dates */
    days_ago:'hace días',
    hours_ago:'hace horas',
    minutes_ago:'hace unos minutos',
    within_the_last_minute:'hace menos de un minuto',

    msg_thankyou:'¡Gracias!',
    msg_approval:'(este comentario será publicado después de ser moderado)',
    msg_approval_required:'¡Gracias por tu comentario! Tu comentario se publicará después de ser aprobado por el moderador.',

    err_bad_html:'Your comment contained bad html.',
    err_bad_email:'Please enter a valid email address.',
    err_too_frequent:'You must wait a few seconds between posting comments.',
    err_comment_empty:'Your comment was not posted because it was empty!',
    err_denied:'Your comment was not accepted.',
    err_unknown:'Your comment was blocked for unknown reasons, please report this.',
    err_spam:'Your comment was detected as spam.',
    err_blocked:'Your comment was blocked by site policy.',

    /* SETTINGS */
    MAX_CHARS: 8192,
    PAGE:'', /* ID of the webpage to show comments for. defaults to the webpage the user is currently visiting. */
    ON_COMMENT: function(){}, /* Function to call after commenting. */
    RELATIVE_DATES:true /* show dates in the form "X hours ago." etc. */
};
