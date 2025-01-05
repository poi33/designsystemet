// import cat2 from '@assets/img/cats/Cat 2.jpg';
// import cat3 from '@assets/img/cats/Cat 3.jpg';
// import cat4 from '@assets/img/cats/Cat 4.jpg';
// import cat5 from '@assets/img/cats/Cat 5.jpg';
import type { Meta, StoryObj } from '@storybook/web-components';
import { PlusIcon, TrashFillIcon } from '@navikt/aksel-icons';

import './Card';
import './CardBlock';
import { Card } from './Card';

export default {
  title: 'Komponenter/Card',
  component: 'ds-card',
  parameters: {
    layout: 'fullscreen',
    customStyles: {
      width: '100%',
      maxWidth: 800,
      alignItems: 'center',
      display: 'grid',
      gap: 'var(--ds-spacing-4)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px , 1fr))',
    },
  },
  args: {
    'data-color': 'neutral',
    'data-size': undefined,
  },
  argTypes: {
    'data-color': {
      type: 'Select',
      // See CustomColors from ../../colors.ts
      options: ['neutral', 'brand1', 'brand2'],
    },
    'data-size': {
      type: 'Select',
      // See CustomColors from ../../types.ts
      options: ['sm', 'md', 'lg'],
    }
  }
} satisfies Meta;

export const Preview: StoryObj = {
  args: {
    'data-color': 'neutral',
  },
  render: (args: any) => {
    const dsCard = document.createElement('ds-card');

    args && Object.keys(args).forEach((key) => {
      if (args[key] !== undefined) {
        dsCard.setAttribute(key, args[key]);
      }
    });

    dsCard.style.maxWidth = '320px';
    const heading = document.createElement('h2');
    heading.textContent = 'Card Neutral';
    const mainText = document.createElement('p');
    mainText.textContent = 'Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this';
    const footer = document.createElement('p');
    footer.setAttribute('data-size', 'sm');
    footer.textContent = 'Footer text';

    dsCard.appendChild(heading);
    dsCard.appendChild(mainText);
    dsCard.appendChild(footer);

    return dsCard;
  }
};

export const Variants: StoryObj = {
  args: {
    // 'data-color': 'neutral',
  },
  render: (args: any) => {
    const master = document.createElement('div');

    master.style.width = '100%';
    master.style.maxWidth = '800px';
    master.style.alignItems = 'center';
    master.style.display = 'grid';
    master.style.gap = 'var(--ds-spacing-4)';
    master.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px , 1fr))';

    master.appendChild(cardVariant('neutral', 'Card neutral','/img/cat/Cat 1.jpg'));
    master.appendChild(cardVariant('subtle', 'Card subtle', '/img/cat/Cat 2.jpg'));
    master.appendChild(cardVariant('brand1', 'Card First', 'img/cat/Cat 3.jpg'));
    master.appendChild(cardVariant('brand2', 'Card Second', 'img/cat/Cat 4.jpg'));
    master.appendChild(cardVariant('brand3', 'Card Third', 'img/cat/Cat 5.jpg'));

    return master;
  }
};

function cardVariant(color: string, heading: string, img:string): Card {
  const dsCard = document.createElement('ds-card') as Card;
  dsCard.setAttribute('data-color', color);

  const firstBlock = document.createElement('ds-card-block');
  const firstCat = document.createElement('img');
  firstCat.setAttribute('src', img);
  firstCat.setAttribute('alt', 'katt')
  firstBlock.append(firstCat);

  const secondBlock = document.createElement('ds-card-block');
  const secondBlockHeading = document.createElement('h2');
  secondBlockHeading.classList.add('ds-heading');
  secondBlockHeading.setAttribute('rel', 'noopener noreferrer');
  const secondBlockLink = document.createElement('a');
  secondBlockLink.href = 'https://designsystemet.no';
  secondBlockLink.target = '_blank'
  secondBlockLink.textContent = heading;
  secondBlockHeading.appendChild(secondBlockLink);
  const secondBlockText = document.createElement('p');
  secondBlockText.textContent = `Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this`;
  secondBlock.appendChild(secondBlockHeading);
  secondBlock.appendChild(secondBlockText);

  dsCard.append(firstBlock);
  dsCard.append(secondBlock);

  return dsCard;
}

// export const Media: Story = () => (
//   <>
//     <Card>
//       <Card.Block>
//         <img src={cat1} alt='katt' />
//       </Card.Block>
//       <Card.Block>
//         <Heading>Card Neutral</Heading>
//         <Paragraph>
//           Most provide as with carried business are much better more the
//           perfected designer. Writing slightly explain desk unable at supposedly
//           about this
//         </Paragraph>
//       </Card.Block>
//     </Card>
//     <Card>
//       <Card.Block>
//         <Heading>Card Neutral</Heading>
//         <Paragraph>
//           Most provide as with carried business are much better more the
//           perfected designer. Writing slightly explain desk unable at supposedly
//           about this
//         </Paragraph>
//       </Card.Block>
//       <Card.Block>
//         <img src={cat1} alt='katt' />
//       </Card.Block>
//     </Card>
//   </>
// );

// export const Video: Story = () => (
//   <Card data-color='neutral' style={{ maxWidth: '320px' }}>
//     <Card.Block>
//       <iframe
//         data-chromatic='ignore'
//         src='https://player.vimeo.com/video/863563441?app_id=122963&amp;title=0&amp;byline=0&amp;portrait=0&amp;dnt=1'
//         width='320px'
//         height='179px'
//         allow='autoplay; fullscreen; picture-in-picture'
//         title='30 år med digitalt innsyn'
//       ></iframe>
//     </Card.Block>
//     <Card.Block>
//       <Heading>
//         <a
//           href='https://www.digdir.no/felleslosninger/30-ar-med-digitalt-innsyn/5015'
//           target='_blank'
//           rel='noreferrer'
//         >
//           Vi feira 30 år med digitalt innsyn
//         </a>
//       </Heading>
//       <Paragraph>
//         Det er i år 30 år sidan dei første forsøka med elektronisk postjournal i
//         Noreg. Sjå opptak frå feiringa på Pressens Hus der det både var
//         historiske tilbakeblikk og debatt om innsyn og openheit i forvaltninga.
//       </Paragraph>
//     </Card.Block>
//   </Card>
// );

// const options = [
//   { value: 'daglig leder', label: 'Dalig leder' },
//   { value: 'forretningsfører', label: 'Forretningsfører' },
// ];

// export const Composed: Story = () => (
//   <div
//     style={{
//       display: 'grid', // Used to test Card.Block border logic
//       gap: 'var(--ds-spacing-4)',
//       gridColumn: '1 / -1',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px , 1fr))',
//       width: '100%',
//     }}
//   >
//     <Card>
//       <Card.Block>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}
//         >
//           <Heading>Rolle 1</Heading>
//           <Button variant='secondary' data-color='danger' data-size='sm'>
//             <TrashFillIcon aria-hidden />
//             Fjern
//           </Button>
//         </div>
//       </Card.Block>
//       <Card.Block>
//         <Field>
//           <Label>Velg rolle</Label>
//           <Select>
//             {options.map(({ value, label }, index) => (
//               <Select.Option key={index} value={value}>
//                 {label}
//               </Select.Option>
//             ))}
//           </Select>
//         </Field>
//         <Textfield label='Fødsels- eller d-nummer' />
//         <Textfield label='Etternavn' />
//       </Card.Block>
//       <Card.Block>
//         <Button variant='secondary' data-color='accent' data-size='sm'>
//           Legg til rolle
//           <PlusIcon aria-hidden />
//         </Button>
//       </Card.Block>
//     </Card>
//     <Card>
//       <Card.Block>
//         <img src={cat1} alt='katt' />
//       </Card.Block>
//       <Card.Block>
//         <Heading>Card Neutral</Heading>
//         <Paragraph>
//           Most provide as with carried business are much better more the
//           perfected designer. Writing slightly explain desk unable at supposedly
//           about this.
//         </Paragraph>
//       </Card.Block>
//     </Card>
//   </div>
// );

// export const WithLink: Story = (args) => (
//   <>
//     <Card {...args} data-color='brand1'>
//       <Card.Block>
//         <img src={cat5} alt='' />
//       </Card.Block>
//       <Card.Block>
//         <Heading>
//           <a
//             href='https://designsystemet.no'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             Link Card
//           </a>
//         </Heading>
//         <Paragraph>
//           Most provide as with carried business are much better more the
//           perfected designer. Writing slightly explain desk unable at supposedly
//           about this
//         </Paragraph>
//         <Paragraph data-size='sm'>Footer text</Paragraph>
//       </Card.Block>
//     </Card>
//     <Card {...args} data-color='neutral'>
//       <Card.Block>
//         <Heading>
//           <a
//             href='https://designsystemet.no'
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             Link Card
//           </a>
//         </Heading>
//         <Paragraph>
//           Most provide as with carried business are much better more the
//           perfected designer. Writing slightly explain desk unable at supposedly
//           about this
//         </Paragraph>
//         <Paragraph data-size='sm'>Footer text</Paragraph>
//       </Card.Block>
//       <Card.Block>
//         <img src={cat5} alt='' />
//       </Card.Block>
//     </Card>
//   </>
// );

// export const AsLink: Story = (args) => (
//   <>
//     <Card {...args} data-color='brand1' asChild>
//       <a
//         href='https://designsystemet.no'
//         target='_blank'
//         rel='noopener noreferrer'
//       >
//         <Card.Block>
//           <Heading>Link Card with blocks</Heading>
//         </Card.Block>
//         <Card.Block>
//           <Paragraph>
//             Most provide as with carried business are much better more the
//             perfected designer.
//           </Paragraph>
//         </Card.Block>
//       </a>
//     </Card>
//     <Card {...args} data-color='neutral' asChild>
//       <a
//         href='https://designsystemet.no'
//         target='_blank'
//         rel='noopener noreferrer'
//       >
//         <Heading>Link Card</Heading>
//         <Paragraph>
//           Most provide as with carried business are much better more the
//           perfected designer.
//         </Paragraph>
//       </a>
//     </Card>
//   </>
// );

// export const AsButton: Story = (args) => (
//   <>
//     <Card {...args} data-color='brand1' asChild>
//       <button type='button'>
//         <Card.Block>
//           <Heading>Button Card with blocks</Heading>
//         </Card.Block>
//         <Card.Block>
//           <Paragraph>
//             Most provide as with carried business are much better more the
//             perfected designer.
//           </Paragraph>
//         </Card.Block>
//       </button>
//     </Card>
//     <Card {...args} data-color='neutral' asChild>
//       <button type='button'>
//         <Heading>Link Card</Heading>
//         <Paragraph>
//           Most provide as with carried business are much better more the
//           perfected designer.
//         </Paragraph>
//       </button>
//     </Card>
//   </>
// );

// export const AsGrid: Story = (args) => (
//   <Card {...args} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
//     <Card.Block>
//       <Heading>Button Card with blocks</Heading>
//     </Card.Block>
//     <Card.Block>
//       <Paragraph>
//         Most provide as with carried business are much better more the perfected
//         designer.
//       </Paragraph>
//     </Card.Block>
//   </Card>
// );
