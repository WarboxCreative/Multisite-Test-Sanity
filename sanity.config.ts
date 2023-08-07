import {defineConfig} from 'sanity'
import {ProductionStructure} from './structure/production'
import {StagingStructure} from './structure/staging'

export default defineConfig([ProductionStructure, StagingStructure])
