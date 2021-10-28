import React, {useState} from 'react'
import { icons } from 'react-icons/lib'
import './photo.css'
import {FiSearch} from 'react-icons/fi'
import {IoIosArrowDown} from 'react-icons/io'

export default function Photo_select() {

    return (
        <div>
            <div class="ps">
                <p id="heading">Photo selection</p>
                <div class="search-bar">
                    <FiSearch id="ic1"/>
                    <input id="my-search" type="text" placeholder="Search"/>
                    <IoIosArrowDown id="ic2"/>
                </div>
            </div>
            <button type="submit" id="imp-btn">Import+</button>
            <div class="my-txt">
                <p class="txt">Import files from pscloud/local document</p>
                <p class="txt">Looks like you didn't upload any files in Photoselectio</p>
            </div>
        </div>
    )
}
