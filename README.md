# academic-website
A template for a minimalist academic website. Preview it [here](https://academic-website-one.vercel.app/)!

## Can I use this?
Yes! This is available for anyone to use for completely free! I only have one request: I have added a link to the bottom of the website as a way for others to find this template &mdash; **please do not remove this**. Of course I cannot enforce this, so if you feel you must remove it, I only ask that you **give credit in some other way**.

## Disclaimer

This is a template based on an academic website I created at the beginning of my PhD. It was not originally meant for others to use, and so it is not robust and may break with even small changes. Accordingly, I can only recommend using this template if you have some familiarity with React and are open to diving into someone else's code if necessary. That said, I have done my best to make it easy to use the site as is (almost all content on the website can be changed through the one folder `/src/content/`). Below is some guidance on replacing the filler content with your own.

## About page

You can change content on the about page through the file `/src/content/profile_info.js`. 

In this file you can change your
- `accent_color`: Currently set to an MIT red, this controls the color of links and other accents.
- `name`: Both your name and name of the website.
- `profile_pic`: A photo of you! Should be placed in `/src/media/` and imported at the top of this file.
- `introduction`: Describe yourself! Input as a `<div>` of `<p>`s.
- `icons`: These are links to your CV, Google Scholar, etc. Input as a list of objects containing the `className` for the fontawesome or academicon icon desired, and the `link`. **Note:** Your CV should be placed in `/public/` and linked as `process.env.PUBLIC_URL + '/cv_filename.pdf'`.

## Research page

You can change content on the research page through the file `/src/content/pub_entries.js`.

In this file, you define publication entries, which look like this:
```
{
    year: 2023,
    title: "Paper title.",
    author_span: <span><b>Your Name</b>, Author, Author, and Author</span>,
    location: "Conference / Journal",
    pdf: "paper.pdf",
    doi: "https://www.doi.org/link-to-paper",
    code: "https://github.com/link-to-code",
}
```
I recommend that all entries have a title and authors, but the other fields are optional. All `pdf`s should be placed in `/public/research/` and match the filename here. **Note:** Authors are given as a `<span>` so that you can bold your own name or add other HTML elements.

These publication entries can then be grouped into lists however you like. The template currently has lists for papers that are published (`publications`) or in prepration (`preparation`). These should then be named and ordered in a manner like below:
```
export const pub_entries = [
  ["Publications", publications], 
  ["In Preparation", preparation],
];
```

## News page

You can change content on the news page through the file `/src/content/news_items.js`.

In this file, you define a list of news items, which each look like this:
```
{
  pic: newsitem_pic,
  year: 2023,
  text_p: <p>text for news item</p>,
}
```
All fields should be given. Again, pictures should be placed in `/src/media/` and imported at the top of this file. **Note:** Text is given as a `<p>` so that links or other HTML elements can be added.

## Final customizations

Before your site is ready, there are two final changes.

1. In `/public/index.html`, change the `<title>` on [line 11](https://github.com/amanirmk/academic-website/blob/20c23b057ecafe35e81196564539ce1f57aef6c9/public/index.html#L11) to your name. This will make sure the name is displayed correctly even before the site has loaded.
2. Use https://favicon.io to create your own website icon! Drop the resulting files in `/public/` and allow it to overwrite the existing ones.

Congrats! You're done, the site is ready! If you're now wondering where to host it, I've had success with the free hobby tier of [Vercel](https://vercel.com/).
