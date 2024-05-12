import { Item, ItemContent, ItemGroup, Segment, SegmentGroup, } from "semantic-ui-react";

export default function EventListItem() {
  return (
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image size="tiny" circular src= '/user.png' />
                    <Item.Content>
                        <Item.Header> Event Title</Item.Header>
                        <Item.Description>
                            hosted by Bob
                        </Item.Description>
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
    </SegmentGroup>
  )
}
