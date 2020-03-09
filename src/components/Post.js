import React, { Component } from 'react';
import PostItem from './PostItem';
import './Post.css';

class Post extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Vanessa Romero',
          avatar: 'https://dummyimage.com/45x45/000/fff',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            },
            date: '04 Jun 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            },
            date: '04 Jun 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
            comments: [
              {
                id: 1,
                author: {
                  name: 'Diego Fernandes',
                  avatar:
                    'https://avatars2.githubusercontent.com/u/2254731?v=4',
                },
                date: '04 Jun 2019',
                content:
                  'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
              },
              {
                id: 1,
                author: {
                  name: 'Diego Fernandes',
                  avatar:
                    'https://avatars2.githubusercontent.com/u/2254731?v=4',
                },
                date: '04 Jun 2019',
                content:
                  'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Diego Fernandes',
          avatar: 'https://dummyimage.com/45x45/000/fff',
        },
        date: '04 Jun 2019',
        content:
          'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
      },
    ],
  };
  render() {
    const { posts } = this.state;
    return (
      <>
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </>
    );
  }
}
export default Post;
