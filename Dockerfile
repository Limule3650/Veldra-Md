FROM node:16
RUN git clone https://github.com/Limule3650/Veldra-Md /root/Astropeda
WORKDIR /root/Limule3650
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#VELDRA