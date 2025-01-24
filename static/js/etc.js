const contentData = {
  "1984": {
      year: "1984",
      heading: "Dr. Anji Reddy established Dr. Reddy’s Laboratories.",
      details: `
          <p><span>1985</span> Our first API factory in Bollarum, Hyderabad, commenced operation.</p>
          <p><span>1986</span> We went public and were listed on the Bombay Stock Exchange. We launched APIs for the first time in India. In the 1980s, we were among the earliest Indian pharma companies to export APIs to the USA at scale.</p>
          <img class="date-text-img" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzaWMlMjB3ZWJ8ZW58MHx8MHx8fDA%3D" alt="">
      `
  },
  "1991": {
      year: "1991",
      heading: "Expansion into new markets.",
      details: `
          <p><span>1992</span> Launched our first international operations in Russia.</p>
          <p><span>1993</span> Began manufacturing branded formulations.</p>
          <img class="date-text-img" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzaWMlMjB3ZWJ8ZW58MHx8MHx8fDA%3D" alt="">
      `
  },
  "1996": {
      year: "1996",
      heading: "Innovation and growth.",
      details: `
          <p><span>1997</span> Established R&D centers for generic drug development.</p>
          <p><span>1998</span> Expanded into Europe and Latin America.</p>
          <img class="date-text-img"  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzaWMlMjB3ZWJ8ZW58MHx8MHx8fDA%3D" alt="">
      `
  },
  "2001": {
      year: "2001",
      heading: "A major milestone.",
      details: `
          <p><span>2002</span> Became the first Indian company to launch a generic drug in the US.</p>
          <p><span>2003</span> Entered the oncology segment with new product launches.</p>
      `
  }
};

function changeContent(element) {
  // Remove active class from all list items
  document.querySelectorAll('.timeline-left ul li').forEach(li => li.classList.remove('active'));

  // Add active class to the clicked item
  element.classList.add('active');

  // Get the year from the clicked item
  const year = element.getAttribute('data-year');

  // Update the content
  const content = contentData[year];
  document.getElementById('year').textContent = content.year;
  document.getElementById('heading').textContent = content.heading;
  document.getElementById('details').innerHTML = content.details;

  // Move the dot indicator
  const dot = document.getElementById('dot');

  // Calculate the dot's new position based on the clicked item's position
  const rect = element.getBoundingClientRect();
  const timelineLeft = document.querySelector('.timeline-left');
  const timelineRect = timelineLeft.getBoundingClientRect();

  // Calculate the top position relative to the timeline container
  const dotOffset = rect.top - timelineRect.top + rect.height / 9;

  // Set the dot's position
  dot.style.top = `${dotOffset}px`;
}