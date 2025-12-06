import { NavigationContainer, ListNavItems, NavItem } from '@keystone-6/core/admin-ui/components';
import type { NavigationProps } from '@keystone-6/core/admin-ui/components';
import React from 'react';
export function CustomNavigation({ lists, authenticatedItem }: NavigationProps) {
    return (
        <NavigationContainer authenticatedItem={authenticatedItem}>
            <NavItem href="/">Dashboard</NavItem>
            <ListNavItems lists={lists} />
            <NavItem href="/all-in-one-accessibility">All in One Accessibility</NavItem>
        </NavigationContainer>
    )
}