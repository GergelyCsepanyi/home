import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import FilledButton from '../FilledButton';
import {CheckBox} from '@rneui/base';
import {useSwipe} from '../../hooks/useSwipe';
import Colors from '../../theme/Colors';
import SubscriberCellStyle from './styles';
import SubscriberItem from '../../interfaces/SubscriberItem';

interface SubscriberCellProps {
  subscriber: SubscriberItem;
  renderComponentType: 'button' | 'checkbox';

  paddingStart?: number;
  onSubscriberSwipedLeft?: (id: number) => void;

  setSubscribers?: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        data: {
          id: number;
          image: {
            uri: string;
          };
          name: string;
          description: string;
          isFollowing: boolean;
        }[];
      }[]
    >
  >;
  onPressFollowButton?: () => void;
}

const SubscriberCell = (props: SubscriberCellProps) => {
  const [cbState, setCbState] = useState(false);

  function onSwipeLeft() {
    if (!props.onSubscriberSwipedLeft) {
      return;
    }
    props.onSubscriberSwipedLeft(props.subscriber.id);
  }

  function onSwipeRight() {}

  const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight);

  return (
    <View
      style={[
        SubscriberCellStyle.subscriberCellContainerStyle,
        props.paddingStart ? {paddingStart: props.paddingStart} : {},
      ]}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <View style={SubscriberCellStyle.imageStyle}>
        <Image
          style={SubscriberCellStyle.imageStyle}
          source={props.subscriber.image ?? {}}
        />
      </View>
      <View style={SubscriberCellStyle.subscriberTextsContainer}>
        <Text style={SubscriberCellStyle.titleTextStyle}>
          {props.subscriber.name}
        </Text>
        <Text style={SubscriberCellStyle.descriptionTextStyle}>
          {props.subscriber.description}
        </Text>
      </View>

      {props.renderComponentType === 'button' && (
        <View style={SubscriberCellStyle.filledButtonContainer}>
          <FilledButton
            backgroundColor={
              props.subscriber.isFollowing
                ? Colors.darkBlue
                : Colors.lightBluePurple
            }
            textColor={
              props.subscriber.isFollowing ? Colors.white : Colors.darkBlue
            }
            onPress={props.onPressFollowButton ?? (() => {})}
            title={props.subscriber.isFollowing ? 'Following' : 'Follow'}
          />
        </View>
      )}

      {props.renderComponentType === 'checkbox' && (
        <View style={SubscriberCellStyle.checkboxContainerStyle}>
          <CheckBox
            checked={cbState}
            onTouchEnd={() => setCbState(cbValue => !cbValue)}
            containerStyle={SubscriberCellStyle.checkboxContainerStyle}
          />
        </View>
      )}
    </View>
  );
};

export default SubscriberCell;
