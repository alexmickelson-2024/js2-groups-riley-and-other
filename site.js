const animals = [
  {
    title: "This is a Giraffe",
    description: ` According to wikipedia: The giraffe's chief distinguishing
                  characteristics are its extremely long neck and legs, its
                  horn-like ossicones, and its spotted coat patterns. It is
                  classified under the family Giraffidae, along with its closest
                  extant relative, the okapi. Its scattered range extends from
                  Chad in the north to South Africa in the south, and from Niger
                  in the west to Somalia in the east. Giraffes usually inhabit
                  savannahs and woodlands. Their food source is leaves, fruits,
                  and flowers of woody plants, primarily acacia species, which
                  they browse at heights most other herbivores cannot reach.`,
    imageLocation: "/images/giraffe.jpeg",
  },
  {
    title: "This is a Lion",
    description: ` According to wikipedia: The lion (Panthera leo) is a large cat
                  of the genus Panthera native to Africa and India. It has a
                  muscular, broad-chested body; short, rounded head; round ears;
                  and a hairy tuft at the end of its tail. It is sexually
                  dimorphic; adult male lions are larger than females and have a
                  prominent mane. It is a social species, forming groups called
                  prides. A lion's pride consists of a few adult males, related
                  females, and cubs. Groups of female lions usually hunt
                  together, preying mostly on large ungulates. The lion is an
                  apex and keystone predator; although some lions scavenge when
                  opportunities occur and have been known to hunt humans, lions
                  typically do not actively seek out and prey on humans.`,
    imageLocation: "/images/lion.jpg",
  },
  {
    title: "This is a Zebra",
    description: `According to wikipedia: Zebras are primarily grazers and can
                  subsist on lower-quality vegetation. They are preyed on mainly
                  by lions, and typically flee when threatened but also bite and
                  kick. Zebra species differ in social behaviour, with plains
                  and mountain zebra living in stable harems consisting of an
                  adult male or stallion, several adult females or mares, and
                  their young or foals; while Grévy's zebra live alone or in
                  loosely associated herds. In harem-holding species, adult
                  females mate only with their harem stallion, while male
                  Grévy's zebras establish territories which attract females and
                  the species is promiscuous. Zebras communicate with various
                  vocalisations, body postures and facial expressions. Social
                  grooming strengthens social bonds in plains and mountain
                  zebras.`,
    imageLocation: "/images/zebra.jpg",
  },
  {
    title: "This is a Elephant",
    description: `According to wikipedia: Elephants are scattered throughout
                  sub-Saharan Africa, South Asia, and Southeast Asia and are
                  found in different habitats, including savannahs, forests,
                  deserts, and marshes. They are herbivorous, and they stay near
                  water when it is accessible. They are considered to be
                  keystone species, due to their impact on their environments.
                  Elephants have a fission-fusion society, in which multiple
                  family groups come together to socialise. Females (cows) tend
                  to live in family groups, which can consist of one female with
                  her calves or several related females with offspring. The
                  leader of a female group, usually the oldest cow, is known as
                  the matriarch.`,
    imageLocation: "/images/elephant.jpg",
  },
  {
    title: "This is a Water Buffalo",
    description: `According to wikipedia: Water buffalo (Bubalus bubalis), also
                  called the domestic water buffalo or Asian water buffalo, is a
                  large bovid originating in the Indian subcontinent and
                  Southeast Asia. Today, it is also found in Italy, the Balkans,
                  Australia, North America, South America and some African
                  countries.[1] Two extant types of water buffalo are
                  recognized, based on morphological and behavioural criteria:
                  the river buffalo of the Indian subcontinent and further west
                  to the Balkans, Egypt and Italy and the swamp buffalo, found
                  from Assam in the west through Southeast Asia to the Yangtze
                  valley of China in the east.[1][2]`,
    imageLocation: "/images/waterBuffalo.jpg",
  },
];
const buildBody = () => {
  return "<h1>Hello world</h1>";
};

function buildHeader() {
  return `    <header>
      <a href="#">Logo</a>
    </header>`;
}
function buildAnimalCard(animal) {
  const animalCard = `
    <div class="card">
      <img src="${animal.imageLocation}" alt="${animal.title}"/>
      <div class="card-text">
        <h3>${animal.title}</h3>
        <p> ${animal.description}</p>
      </div>
    </div>`;
  return animalCard;
}
function buildLeftNav() {
  return `<article id="page-container">
      <!--Column -->
      <nav>
        <ul>
          <li>Home</li>
          <li>Page 1</li>
          <li>Page 2</li>
        </ul>
      </nav>`;
}
function buildMain() {
  var string = ``;
  const url = window.location.href;
  const urlsplit = url.split("?");
  const splitarray = urlsplit[1].split("&");
  const offestQuery = splitarray.find((value) => {
    return value.includes("offset=");
  });
  const offsetValue = offestQuery.split("=")

  const valueQuery = splitarray.find((value) => {
    return value.includes("count=");
  });
  const valueValue = valueQuery.split("=")
  const totalCards = parseInt(valueValue[1]) + parseInt(offsetValue[1]);
  if (parseInt(valueValue[1]) == "" || isNaN(parseInt(valueValue[1])))
  {
    return `<p>You don goofed, count is missing or invalid</p>`
  }
  else if(parseInt(offsetValue[1]) == "" || isNaN(parseInt(offsetValue[1])))
  {
    return `<p>You don goofed, offset is missing or invalid</p>`
  }
  else if(5 < valueValue[1])
    {
      return `<p>You don goofed, count is greater than 5</p>`;
    }
    else if(valueValue[1] < 0)
      {
        return `<p>You don goofed, count cant be negative</p>`;
      }
      else if (offsetValue[1] < 0)
        {
          return `<p>You don goofed, offset cant be negative</p>`;
        }
        else if (5 < offsetValue[1])
          {
            return `<p>You don goofed, offset cant be greater than 5}</p>`;
          }
          else if (totalCards > 5)
          {
            return `<p>You don goofed, count and offset are too high for number of cards</p>`;
          }
  else
  {
  function removeCards(){
    return animals.slice(offsetValue[1])
  }

  console.log(removeCards())
  for (const animal of countCards()) {
    const animalText = buildAnimalCard(animal);
    string = string + animalText;
  }
  function countCards(){
    return removeCards().slice(0,valueValue[1]);
  }
  
  return `      <section class="main-container">

        <!-- Row -->
        <main>
          <h1>Hello Class</h1>

          <article class="card-container"> 
          ${string}
          </article>
        </main>
        </section>`;
}
}
function buildFooter() {
  return `<footer>
      <ul>
        <li>Contact</li>
        <li>About</li>
        <li>Privacy</li>
      </ul>
    </footer>`;
}
function buildSiteLayout() {
  bigboystring = buildHeader() + buildLeftNav() + buildMain() + buildFooter();
  return bigboystring;
}
document.write(buildSiteLayout());
