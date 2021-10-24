import * as React from 'react'
import { Icon, IconProps } from '@chakra-ui/react'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { HiOutlineLocationMarker } from '@react-icons/all-files/hi/HiOutlineLocationMarker'
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail'
import { HiOutlineDownload } from '@react-icons/all-files/hi/HiOutlineDownload'
import { HiOutlineCode } from '@react-icons/all-files/hi/HiOutlineCode'
import { HiOutlineHeart } from '@react-icons/all-files/hi/HiOutlineHeart'
import { FunctionComponent } from 'react'
import { HiOutlineCalendar } from '@react-icons/all-files/hi/HiOutlineCalendar'
import { HiOutlineBriefcase } from '@react-icons/all-files/hi/HiOutlineBriefcase'
import { IoPersonCircleOutline } from '@react-icons/all-files/io5/IoPersonCircleOutline'

export const GithubIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={FaGithub} {...props} />
)

export const LinkedInIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={FaLinkedinIn} {...props} />
)

export const LocationIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={HiOutlineLocationMarker} {...props} />
)

export const MailIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={HiOutlineMail} {...props} />
)

export const DownloadIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={HiOutlineDownload} {...props} />
)

export const CodeIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={HiOutlineCode} {...props} />
)

export const HeartIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={HiOutlineHeart} {...props} />
)

export const CalendarIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={HiOutlineCalendar} {...props} />
)

export const BriefcaseIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={HiOutlineBriefcase} {...props} />
)

export const PersonIcon: FunctionComponent<IconProps> = (props) => (
  <Icon as={IoPersonCircleOutline} {...props} />
)
