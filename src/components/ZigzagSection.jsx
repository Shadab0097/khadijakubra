import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledSection = styled.section`
  background: linear-gradient(to bottom, #ffffff 0%, #f7fafc 100%);
  padding: 4rem 0;
`;

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 4rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column !important;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const ContentContainer = styled(motion.div)`
  flex: 1;
  h3 {
    color: #1a202c;
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    color: #4a5568;
    font-size: 1.125rem;
    line-height: 1.75;
  }
`;

export default function ZigzagSection({ features }) {
  return (
    <StyledSection>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <FeatureContainer
            key={index}
            style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
          >
            <ImageContainer
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={feature.image} alt={feature.title} />
            </ImageContainer>
            <ContentContainer
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </ContentContainer>
          </FeatureContainer>
        ))}
      </div>
    </StyledSection>
  );
}