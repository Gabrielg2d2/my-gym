import { FlatList, IPressableProps, Pressable, Text } from "native-base";
import { useState } from "react";

type IGroupProps = IPressableProps & {
  name: string;
  isActive?: boolean;
};

function Group({ name, isActive = false, ...props }: IGroupProps) {
  return (
    <Pressable
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1,
      }}
      {...props}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
}

export type IListGroupsProps = {
  arrayGroups: string[];
  getCurrentGroup: (group: string) => void;
};

export function ListGroups(props: IListGroupsProps) {
  const [activeGroup, setActiveGroup] = useState<string>(props.arrayGroups[0]);

  function handlePressGroup(group: string) {
    setActiveGroup(group);
    props.getCurrentGroup(group);
  }

  return (
    <FlatList
      horizontal
      data={props.arrayGroups}
      renderItem={({ item }) => (
        <Group
          name={item}
          isActive={item === activeGroup}
          onPress={() => handlePressGroup(item)}
          mr={2}
        />
      )}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
    />
  );
}
