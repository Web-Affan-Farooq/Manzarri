"use client";
import React, { useEffect } from 'react';
import { OrderDetails } from '@/@types/order';
import { useOrders } from '@/stores/orders';

const FeedOrders = ({ arrayData }: { arrayData: OrderDetails[] }) => {
    const { feedOrders } = useOrders();
    useEffect(() => {
        feedOrders(arrayData);
    }, [arrayData, feedOrders]);
    return (
        <></>
    )
}

export default FeedOrders