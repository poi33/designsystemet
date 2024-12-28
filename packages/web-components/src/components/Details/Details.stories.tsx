import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';
import { DetailsProps } from './Details';
// import '../../index';

// import { Button, Card, Details, Link } from '../';

const meta: Meta<DetailsProps> = {
  title: 'Komponenter/Details',
  component: 'dcs-details',
  parameters: {
    layout: 'padded',
  },
}

export default meta;

export const Preview: StoryObj = {
  args: {
    'class': '',
    'data-color': 'neutral',
    'open': true,
  },
  render: ({open, defaultOpen, onToggle} : DetailsProps) => html`
    <ds-details>test</ds-details>`
    //   ${open ? `open=${open}`: ''}
    //   ${defaultOpen ? `defaultOpen=${defaultOpen}` : ''}
    // >
    //   <ds-details-summary>Press here to toggle details</ds-details-summary>
    //   <ds-details-content>testing details component</ds-details-content>
    // </ds-details>
  //`,
}

export const InCard: StoryObj = {

}

// export const Preview: StoryFn<typeof Details> = (args) => (
//   <Details {...args}>
//     <Details.Summary>
//       Hvem kan registrere seg i Frivillighetsregisteret?
//     </Details.Summary>
//     <Details.Content>
//       For å kunne bli registrert i Frivillighetsregisteret, må organisasjonen
//       drive frivillig virksomhet. Det er bare foreninger, stiftelser og
//       aksjeselskap som kan registreres. Virksomheten kan ikke dele ut midler til
//       fysiske personer. Virksomheten må ha et styre.
//     </Details.Content>
//   </Details>
// );
// Default values are selected in Controls
// Preview.args = {
//   'data-color': 'neutral',
// };

// export const InCard: StoryFn<typeof Details> = () => (
//   <Card data-color='neutral'>
//     <Details>
//       <Details.Summary>Vedlegg</Details.Summary>
//       <Details.Content>Vedlegg 1, vedlegg 2, vedlegg 3</Details.Content>
//     </Details>
//   </Card>
// );

// export const InCardWithColor: StoryFn<typeof Details> = () => (
//   <Card data-color='brand2'>
//     <Details>
//       <Details.Summary>Hvordan får jeg tildelt et jegernummer?</Details.Summary>
//       <Details.Content>
//         Du vil automatisk få tildelt jegernummer og bli registrert i
//         Jegerregisteret når du har bestått jegerprøven.
//       </Details.Content>
//     </Details>
//     <Details>
//       <Details.Summary>
//         Jeg har glemt jegernummeret mitt. Hvor finner jeg dette?
//       </Details.Summary>
//       <Details.Content>
//         <p style={{ marginTop: 0 }}>
//           Du kan finne dette ved å logge inn på{' '}
//           <Link href='https://minjegerside.brreg.no/'>Min side</Link>
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
//           orci nisi. Nulla sed sem eget odio pellentesque venenatis vitae et
//           sem. Nunc vulputate nibh id nunc condimentum, et mattis quam vehicula.
//           Praesent gravida turpis eget tincidunt sodales. Praesent ante arcu,
//           semper at rhoncus ut, commodo ut ligula. Phasellus quis nibh vitae
//           dolor faucibus dictum et dapibus justo. Morbi scelerisque sem id nisi
//           ornare, in facilisis felis molestie.
//         </p>
//         <p>
//           Vivamus maximus eget mi ut aliquam. Nulla facilisi. Sed lobortis, dui
//           at facilisis scelerisque, tellus justo sodales enim, at luctus diam
//           turpis id diam. Sed vel magna eget nulla ornare lacinia. Mauris
//           commodo erat at dui interdum viverra. Morbi rhoncus dolor in massa
//           vehicula, aliquam dictum tortor luctus. Quisque vel feugiat libero.
//         </p>
//         <p>
//           Nullam sed quam vestibulum, scelerisque nisl vel, rhoncus leo. Integer
//           eu tempor ex, in vulputate erat. Quisque nisl lectus, consequat sit
//           amet ex ut, interdum tincidunt ligula. Morbi sed odio a leo bibendum
//           hendrerit. Nullam erat nisi, convallis tincidunt tempor eu, iaculis
//           scelerisque mauris. Nulla pretium ornare blandit. Proin dignissim
//           massa risus, eget euismod enim lobortis at. Donec venenatis libero sed
//           ligula convallis scelerisque. Pellentesque ut aliquet ante.
//           Pellentesque et eleifend ex. Quisque posuere convallis urna et
//           ullamcorper. Morbi eu tincidunt mauris. Ut nec diam nunc. Sed sed
//           neque facilisis, luctus libero vitae, porttitor ex. Mauris euismod
//           vitae velit eu laoreet.
//         </p>
//         <p>
//           Vivamus maximus eget mi ut aliquam. Nulla facilisi. Sed lobortis, dui
//           at facilisis scelerisque, tellus justo sodales enim, at luctus diam
//           turpis id diam. Sed vel magna eget nulla ornare lacinia. Mauris
//           commodo erat at dui interdum viverra. Morbi rhoncus dolor in massa
//           vehicula, aliquam dictum tortor luctus. Quisque vel feugiat libero.
//         </p>
//         <p>
//           Nullam sed quam vestibulum, scelerisque nisl vel, rhoncus leo. Integer
//           eu tempor ex, in vulputate erat. Quisque nisl lectus, consequat sit
//           amet ex ut, interdum tincidunt ligula. Morbi sed odio a leo bibendum
//           hendrerit. Nullam erat nisi, convallis tincidunt tempor eu, iaculis
//           scelerisque mauris. Nulla pretium ornare blandit. Proin dignissim
//           massa risus, eget euismod enim lobortis at. Donec venenatis libero sed
//           ligula convallis scelerisque. Pellentesque ut aliquet ante.
//           Pellentesque et eleifend ex. Quisque posuere convallis urna et
//           ullamcorper. Morbi eu tincidunt mauris. Ut nec diam nunc. Sed sed
//           neque facilisis, luctus libero vitae, porttitor ex. Mauris euismod
//           vitae velit eu laoreet.
//         </p>
//         <p style={{ marginBottom: 0 }}>
//           Nulla facilisi. Maecenas vel fringilla felis. Sed orci felis, volutpat
//           ac bibendum sit amet, sodales ac purus. Fusce nisi eros, tristique sed
//           consequat sed, scelerisque et tortor. Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit. Vestibulum pellentesque vehicula orci sed
//           scelerisque. Ut nec elementum tortor. Praesent lobortis eros nec
//           laoreet iaculis. Pellentesque ex purus, vulputate non volutpat non,
//           sodales a arcu. Phasellus ornare, lorem nec aliquam venenatis, augue
//           eros sagittis quam, at sagittis tellus ante in metus.
//         </p>
//       </Details.Content>
//     </Details>
//   </Card>
// );

// export const Controlled: StoryFn<typeof Details> = () => {
//   const [open1, setOpen1] = useState(false);
//   const [open2, setOpen2] = useState(false);
//   const [open3, setOpen3] = useState(false);
//   const toggleOpen = () => {
//     const isOpen = [open1, open2, open3].every(Boolean);
//     setOpen1(!isOpen);
//     setOpen2(!isOpen);
//     setOpen3(!isOpen);
//   };

//   return (
//     <>
//       <Button onClick={toggleOpen}>Toggle Details</Button>
//       <br />
//       <>
//         <Details open={open1} onToggle={() => setOpen1(!open1)}>
//           <Details.Summary>Enkeltpersonforetak</Details.Summary>
//           <Details.Content>
//             Skal du starte for deg selv? Enkeltpersonforetak er ofte den
//             enkleste måten å etablere bedrift på. Denne organisasjonsformen har
//             både fordeler og ulemper. Det gir deg stor grad av frihet, men kan
//             også gi betydelig risiko fordi du har personlig ansvar for
//             økonomien.
//           </Details.Content>
//         </Details>
//         <Details open={open2} onToggle={() => setOpen2(!open2)}>
//           <Details.Summary>Aksjeselskap (AS)</Details.Summary>
//           <Details.Content>
//             Planlegger du å starte næringsvirksomhet alene eller sammen med
//             andre? Innebærer næringsvirksomheten en økonomisk risiko? Vil du ha
//             rettigheter som arbeidstaker og muligheten til at andre kan
//             investere i selskapet ditt? Da kan aksjeselskap være en
//             hensiktsmessig organisasjonsform.
//           </Details.Content>
//         </Details>
//         <Details open={open3} onToggle={() => setOpen3(!open3)}>
//           <Details.Summary>Ansvarlig selskap (ANS/DA)</Details.Summary>
//           <Details.Content>
//             Er dere minst to personer som skal starte opp egen virksomhet?
//             Samarbeider du godt med den/de som du skal starte opp sammen med?
//             Krever virksomheten få investeringer og tar du liten økonomisk
//             risiko? Da kan du vurdere å etablere et ansvarlig selskap.
//           </Details.Content>
//         </Details>
//       </>
//     </>
//   );
// };
