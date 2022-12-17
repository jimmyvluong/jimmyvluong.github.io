AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Educator Preparation Data Scientist",
    cardImage: "assets/images/experience-page/csu-seal-new.png",
    place: "California State University, Chancellor's Office",
    time: "(September 2021 - Present)",
    desp: "<li>https://www.calstate.edu/impact-of-the-csu/teacher-education/educator-quality-center/Pages/default.aspx</li><li>Develop and manage systemwide data pipeline projects for educator preparation programs serving 1,000+ users across the 23 CSU campuses.</li><li>Stack: R, Python, Azure Databricks, Azure Data Factory, SQL Server Integration Services, MS SQL Server, Tableau</li>",
    },
  {
    title: "Strategic Data Project Fellow",
    cardImage: "assets/images/experience-page/sdp_fellow.jpg",
    place: "Harvard Graduate School of Education",
    time: "(September 2021 - Present)",
    desp: "<li>https://sdp.cepr.harvard.edu/home</li><li>Recruited to the Educator Quality Center through the Strategic Data Project (SDP) Partnership, based out of the Center for Education Policy Research at Harvard University.</li><li>The SDP Partnership is a two-year capacity-building program that places data strategists in education agencies to have an immediate impact on policy decisions that affect student outcomes and execute on an actionable strategic data project.<li>Involves extensive training in measurement and analysis, leadership and change management, and education policy.</li>",
  },
  {
    title: "SQL Crash Course Teaching Assistant",
    cardImage: "assets/images/experience-page/corise_logo.jpg",
    place: "Corise",
    time: "(October 2022 - November 2022)",
    desp: "<li>https://corise.com/course/sql-crash-course</li><li>Host office hour sessions to support student learning.</li><li>Answer student questions about SQL based on industry best-practice.</li>",
  },
  {
    title: "Action Works Data Analyst (6-month contract)",
    cardImage: "assets/images/experience-page/patagoia_bear_logo.jpg",
    place: "Patagonia",
    time: "(April 2021 - September 2021)",
    desp: "<li>https://www.patagonia.com/actionworks/</li><li>Migrate the data migration process from Excel sheets to Python and SQL that forms the data core of the Patagonia Action Works platform.</li><li>Mentor 3+ colleagues connected via BIPOC community group in data analysis skills and career paths. 1 mentee successfully transitioned from a customer-facing role into the Analytics and Insights team.</li><li>Built Grantee Scorecard tool enabling environmental officers to identify and provide support to top 10% “superusers” of the Action Works platform.</li>",
  },
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/sfc_logo.jpg",
    place: "Scottish Funding Council",
    time: "(September 2021 - present)",
    desp: "<li>https://www.sfc.ac.uk/</li><li>Analyze 15+ years of Scottish college and university student information using SQL, Python (Pandas), & SAS.</li><li>Spearheaded creation of QlikView dashboards for 40 colleges and universities for use by CEO and directors</li>",
  },
  {
    title: "Project Manager",
    cardImage: "assets/images/experience-page/rana_logo.png",
    place: "Rana Creek Habitat Restoration",
    time: "(September 2021 - present)",
    desp: "<li>https://www.ranacohabitat.com/</li><li>Responsible for overall program management of consulting portfolio of 10+ active projects valued >$1.5M.</li><li> Led and trained team of 12+ including project engineers, foremen, and admin staff.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Webmaster",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Hooked on Fishing, Not on Violence. Responsible for maintaining and update the Wordpress website for the non-profit.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
