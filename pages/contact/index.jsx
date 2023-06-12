export default function Contact() {
  return (
    <>
      <h1>Contact</h1>

      <p>TODO: form not currently functional.</p>

      <form
        action="https://formsubmit.co/8bab09675a3e92545540666f4bb4a835"
        method="POST"
      >
        {/* _subject is used for the email subject line */}
        <input type="hidden" name="_subject" value="Sent from my nextjs blog" />

        {/* _next choose a URL to redirect to after submitting. Default is FormSubmit thankyou page if not included */}

        {/* QUESTION: will a relative url work or does the URL need to be absolute??? */}
        <input type="hidden" name="_next" value="/" />

        <label for="name">Name</label>
        <input placeholder="Name" type="text" id="name" name="name" />
        <label for="mail">Email</label>
        <input
          placeholder="Email"
          type="email"
          id="mail"
          name="email"
          required
        />
        <label for="msg">Message</label>
        <textarea
          placeholder="Message"
          id="msg"
          name="message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
