import useModal from '../../hooks/useModal';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as S from './Community.styles';
import { Table, Image, Card } from 'antd';
import CommunityDetailModal from './component/CommunityDetailModal';

export default function Community() {
    const { modalOpen } = useModal();

    const data = [
        {
          key: '1',
          image: 'https://image1.lottetour.com/static/trvtour/201910/1715/011ee82200cbf4f301c382e19f44b28e',
          title: '엑스 맨션에서 훈련하기',
          host: 'Jubilee 님',
          price: '₩52,712 /인'
        },
        {
          key: '2',
          image: 'https://image1.lottetour.com/static/trvtour/201910/1715/011ee82200cbf4f301c382e19f44b28e',
          title: '케빈 하트와 함께하는 체험',
          host: 'Kevin Hart 님',
          available: '8월 22일부터 예약 가능'
        },
        {
          key: '3',
          image: 'https://image1.lottetour.com/static/trvtour/201910/1715/011ee82200cbf4f301c382e19f44b28e',
          title: "프린스의 '퍼플 레인' 하우스",
          host: '도자 캣 님',
          available: '10월부터 예약 가능'
        },
        {
          key: '4',
          image: 'https://image1.lottetour.com/static/trvtour/201910/1715/011ee82200cbf4f301c382e19f44b28e',
          title: "프린스의 '퍼플 레인' 하우스",
          host: '웬디 님과 리사 님',
          available: '10월부터 예약 가능'
        },
        {
            key: '5',
            image: 'https://image1.lottetour.com/static/trvtour/201910/1715/011ee82200cbf4f301c382e19f44b28e',
            title: "프린스의 '퍼플 레인' 하우스",
            host: '웬디 님과 리사 님',
            available: '10월부터 예약 가능'
          },
          {
            key: '6',
            image: 'https://image1.lottetour.com/static/trvtour/201910/1715/011ee82200cbf4f301c382e19f44b28e',
            title: "프린스의 '퍼플 레인' 하우스",
            host: '웬디 님과 리사 님',
            available: '10월부터 예약 가능',
          }
    ];

    return (
        <>
            <SearchBar />
            <S.CardContainer>
                {data.map(item => (
                    <S.CardItem key={item.key} onClick={modalOpen}>
                        <Card
                            cover={<S.RoundedImage src={item.image} alt={item.title} />}
                            bordered={false}
                        >
                            <S.Title>{item.title}</S.Title>
                            <S.Host>{item.host}</S.Host>
                            {item.price && <S.Price>{item.price}</S.Price>}
                            {item.available && <S.Available>{item.available}</S.Available>}
                        </Card>
                    </S.CardItem>
                ))}
            </S.CardContainer>
            <CommunityDetailModal />
        </>
    );
}
