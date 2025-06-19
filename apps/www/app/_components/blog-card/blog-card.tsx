import {
  Card,
  CardBlock,
  Heading,
  Paragraph,
  Tag,
} from '@digdir/designsystemet-react';
import cl from 'clsx/lite';

import { Link } from 'react-router';
import classes from './blog-card.module.css';

type BlogCardProps = {
  title: string;
  desc: string;
  author?: string;
  date?: string;
  image: string;
  href: string;
  featured?: boolean;
  tagText?: string;
  tagColor?: 'brand1' | 'brand2' | 'brand3';
  level?: 2 | 3;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>;

export const BlogCard = ({
  title,
  desc,
  author,
  image,
  href,
  date,
  featured = false,
  className,
  tagText,
  tagColor,
  level = 3,
  ...props
}: BlogCardProps) => {
  return (
    <Card
      data-featured={featured}
      className={cl(classes.card, className)}
      data-color='neutral'
      asChild
      {...props}
    >
      <article>
        <CardBlock>
          <img src={image} alt='' className={classes.image} />
        </CardBlock>
        <CardBlock>
          {tagText && (
            <Tag className={classes.tag} data-color={tagColor} data-size='sm'>
              {tagText}
            </Tag>
          )}
          <Heading level={level} data-size={featured ? 'lg' : 'sm'}>
            <Link to={href}>{title}</Link>
          </Heading>
          <Paragraph data-size={featured ? 'lg' : 'sm'}>{desc}</Paragraph>
          <Paragraph
            data-size={featured ? 'md' : 'xs'}
            className={classes.meta}
          >
            {author ||
              (date && (
                <>
                  <span>{date}</span>
                  {author && (
                    <>
                      <span aria-hidden className={classes.metaSquare} />
                      <span>{author}</span>
                    </>
                  )}
                </>
              ))}
          </Paragraph>
        </CardBlock>
      </article>
    </Card>
  );
};

export default BlogCard;
