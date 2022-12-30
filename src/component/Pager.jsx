import Pagination from 'react-bootstrap/Pagination'
import React from 'react'
import PropTypes from "prop-types";

export default function Pager(props) {
    const renderPageItems = () => {
        const res = []
        for (
            let i = props.pageNumber - props.pageItemCount;
            i < props.pageNumber + props.pageItemCount;
            i++
        ) {
            if (i < 0 || i >= props.pageCount) {
                continue
            }
            res.push(
                <Pagination.Item
                    key={i}
                    active={i === props.pageNumber}
                    onClick={() => props.onPageChanged(i)}
                >
                    {i + 1}
                </Pagination.Item>
            )
        }
        return res
    }

    return (
        <Pagination>
            {props.pageNumber > 0 && (
                <Pagination.First
                    active={props.pageNumber === 0}
                    onClick={() => props.onPageChanged(0)}
                />
            )}
            {renderPageItems()}
            {props.pageNumber < props.pageCount - 1 && (
                <Pagination.Last
                    active={props.pageNumber === props.pageCount - 1}
                    onClick={() => props.onPageChanged(props.pageCount - 1)}
                />
            )}
        </Pagination>
    )
}

Pager.PropType = {
    pageNumber: PropTypes.number,
    pageCount: PropTypes.number,
    onPageChanged: PropTypes.func,
    pageItemCount: PropTypes.number
}

